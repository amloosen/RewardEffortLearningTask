clear all; close all; clear

%get the data
load('fMRI_seq.mat') %load data
originalMatrix = [data(1).thresh data(1).reward];
nr_trials = length(originalMatrix);

%count the zeros in the reward column
nr_zeros = length(find(originalMatrix(:,2)==0));

if nr_trials/nr_zeros ~= 2
    error('Ratio of Zeros is off')
else
    % Determine the number of rows to remove
    numToRemove = 20;

    % Randomly select either first or final rows.
    partToRemove = 2;
    currentIndices = 1:size(originalMatrix, 1);
    if partToRemove(1)==1
        indicesToRemove = 1:numToRemove;
    else
        indicesToRemove = (size(originalMatrix, 1)-numToRemove)+1:size(originalMatrix, 1);
    end

    % Remove selected rows
    reducedMatrix = originalMatrix;
    reducedMatrix(indicesToRemove, :) = [];

    % Calculate the number of rows with 0 reward in the original and reduced matrices
    numZerosOriginal = sum(originalMatrix(:, 2) == 0);
    numZerosReduced = sum(reducedMatrix(:, 2) == 0);

    reducedMatrix_PE = [];
    cor = corr(reducedMatrix);

    % Select the columns you want to correlate
    reducedMatrix_PE(:, 1) = diff(reducedMatrix(:, 1));
    reducedMatrix_PE(:, 2) = diff(reducedMatrix(:, 2));

    % Compute the correlation for approx. PEs
    cor_PE = corr(reducedMatrix_PE);

    numZerosNew = sum(reducedMatrix(:, 2) == 0);
    missing_zeros = (size(reducedMatrix,1)/2)-numZerosNew;

    nonZerosNew = find(reducedMatrix(:, 2) ~= 0);
    index_remtmp = randperm(size(nonZerosNew,1),missing_zeros);
    reducedMatrix(nonZerosNew(index_remtmp),2) = 0;
    numZerosNew = sum(reducedMatrix(:, 2) == 0);%check again

%     % Ensure that both matrices have 50% of 0s and cors are ok
%     while numZerosReduced ~= 0.5 * (size(originalMatrix, 1) - numToRemove) || abs(cor(2)) >= .1 || abs(cor_PE(2)) >= .1
%         % Randomly select either first or final rows.
%         partToRemove = randperm(2);
%         currentIndices = 1:size(originalMatrix, 1);
%         if partToRemove(1)==1
%             indicesToRemove = 1:numToRemove;
%         else
%             indicesToRemove = (size(originalMatrix, 1)-numToRemove):size(originalMatrix, 1);
%         end
% 
%         reducedMatrix = originalMatrix;
%         reducedMatrix(indicesToRemove, :) = [];
%         numZerosReduced = sum(reducedMatrix(:, 2) == 0);
% 
%         %compute correlations
%         cor = corr(reducedMatrix);
% 
%         % Select the columns you want to correlate
%         reducedMatrix_PE(:, 1) = diff(reducedMatrix(:, 1));
%         reducedMatrix_PE(:, 2) = diff(reducedMatrix(:, 2));
% 
%         % Compute the correlation for approx. PEs
%         cor_PE = corr(reducedMatrix_PE);
%     end

    % Display the original and reduced matrices
    disp('Original Matrix:');
    disp(originalMatrix);
    disp('Reduced Matrix:');
    disp(reducedMatrix);
end

% Save to a CSV file
headers = {'effort','reward'};
dataTable = array2table(data, 'VariableNames', headers);
writematrix(reducedMatrix, 'Sequence_OnlinePilotIntracranial.csv');

% Save feedback sheet with sentences etc.
generateFeedbackCSV(reducedMatrix(:,2));
