function generateFeedbackCSV(Points)
    % Check if the input vector is provided
    if nargin < 1
        error('Input vector for Points is required.');
    end

    % Define the FeedbackText1, FeedbackText2, and stimFile arrays for different points
    feedbackText1Map = containers.Map({0, 1, 2, 3, 4, 5, 6, 7}, {
        'You reached the planet, but there were no rubies!';
        'You reached the planet, you get 1 ruby!';
        'You reached the planet, you get 2 rubies!';
        'You reached the planet, you get 3 rubies!';
        'You reached the planet, you get 4 rubies!';
        'You reached the planet, you get 5 rubies!';
        'You reached the planet, you get 6 rubies!';
        'You reached the planet, you get 7 rubies!'
    });

    feedbackText2Map = containers.Map({0, 1, 2, 3, 4, 5, 6, 7}, {
        'You did not have enough fuel to reach the planet and missed 0 rubies!';
        'You did not have enough fuel to reach the planet and missed 1 ruby!';
        'You did not have enough fuel to reach the planet and missed 2 rubies!';
        'You did not have enough fuel to reach the planet and missed 3 rubies!';
        'You did not have enough fuel to reach the planet and missed 4 rubies!';
        'You did not have enough fuel to reach the planet and missed 5 rubies!';
        'You did not have enough fuel to reach the planet and missed 6 rubies!';
        'You did not have enough fuel to reach the planet and missed 7 rubies!'
    });

    stimFileMap = containers.Map({0, 1, 2, 3, 4, 5, 6, 7}, {
        'None'
        'stim/image1.png';
        'stim/image2.png';
        'stim/image3.png';
        'stim/image4.png';
        'stim/image5.png';
        'stim/image6.png';
        'stim/image7.png'
    });

    % Initialize arrays for FeedbackText1, FeedbackText2, and stimFile
    FeedbackText1 = cell(size(Points));
    FeedbackText2 = cell(size(Points));
    stimFile = cell(size(Points));

    % Populate arrays based on the input vector
    for i = 1:size(Points)
        point = Points(i);
        FeedbackText1{i} = feedbackText1Map(point);
        FeedbackText2{i} = feedbackText2Map(point);
        stimFile{i} = stimFileMap(point);
    end

    % Create a table with the data
    data = table(Points, FeedbackText1, FeedbackText2, stimFile, 'VariableNames', {'Points', 'FeedbackText1', 'FeedbackText2', 'stimFile'});

    % Generate a unique filename based on the current timestamp
    timestamp = datestr(now, 'yyyy-mm-dd_HHMMSS');
    filename = ['Allfeedback_data_' timestamp '.csv'];

    % Write the table to a CSV file
    writetable(data, filename);
    fprintf('CSV file "%s" has been generated.\n', filename);

    % Split the table into two separate tables (first 50% and last 50%)
    numRows = size(data, 1);
    splitIndex = floor(numRows / 2);

    table1 = data(1:splitIndex, :);
    table2 = data(splitIndex+1:end, :);

    % Generate a unique filename based on the current timestamp
    timestamp = datestr(now, 'yyyy-mm-dd_HHMMSS');
    filename = ['feedback_data_' timestamp '.csv'];

    % Write the table to a CSV file
    writetable(data, filename);
    fprintf('CSV file "%s" has been generated.\n', filename);
end
