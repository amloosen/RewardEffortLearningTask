function EL_initialize_seqs(pract)

global params user

%% initialize null trials
for b = 1:params.task.exp.n_blocks
    user.nulltrial(b,:) = [zeros(1,params.task.exp.n_trials) ones(1,params.task.exp.n_nulls)];
    
    % randomize and make sure that it behaves well
    crit = 3; %4 before
    ok = 0;
    while ~ok
        user.nulltrial(b,:) = user.nulltrial(b,randperm(length(user.nulltrial(b,:))));
        ok = 1;
        
        for i = 1:length(user.nulltrial(b,:))-crit
            if sum(user.nulltrial(b,i:i+crit)) > 1
                ok = 0;
            end
        end
        
        if ~ok
             fprintf('re-shuffling nulltrials - not well behaved.\n')
        end
    end
end        

%% condition (stimulus 1,2) sequence
user.condition = [ones(params.task.exp.n_blocks*params.task.exp.n_trials/2,1); ones(params.task.exp.n_blocks*params.task.exp.n_trials/2,1)*2];

% randomize and make sure that it behaves well
crit = 4;
ok = 0;
while ~ok
    user.condition = user.condition(randperm(length(user.condition)));
    ok = 1;
    
    for i = 1:length(user.condition) - crit
        if numel(unique(user.condition(i:i+crit))) < 2  % all trial from i to i+crit are the same stimulus
            ok = 0;
        end
    end
    
    if ~ok
        fprintf('re-shuffling stimuli presentation - not well behaved.\n')
    end
end


%% load sequences
if ~nargin %real experiment
    load([params.general.wd_seqs params.general.wd_exp_file]);
else
    load([params.general.wd_seqs params.general.wd_pract_file]);
end
    

%% threshold
user.thresh    = nan(2,length(user.condition));
user.thresh(1,find(user.condition==1)) = seqs(1).eff(1:length(find(user.condition==1)));
% user.thresh(2,find(user.condition==2)) = seqs(2).eff(1:length(find(user.condition==2)));
if seqs(1).eff > length(find(user.condition==1))
    alert('effort: sequence is longer than the number of trials')
end


%% introduce 50% 0-point outcomes
 
% introduce 0s and make sure that it behaves well
crit = 3;

% stim 1
ok = 0;
while ~ok
    r = seqs(1).rew;
    ok = 1;
    
    tmp = randperm(length(r));
    r(tmp(1:round(length(r)/2))) = 1;  % set to 1 because 1 will be removed below
    
    for i = 1:length(r) - crit
        if sum(r(i:i+crit-1)) == crit % all trial from i to i+crit are 0s
            ok = 0;
        end
    end
    
    if ~ok
        fprintf('1: re-shuffling 0 outcomes - not well behaved.\n')
    end
end
seqs(1).rew = r;


% % stim 2
% ok = 0;
% while ~ok
%     r = seqs(2).rew;
%     ok = 1;
%     
%     tmp = randperm(length(r));
%     r(tmp(1:round(length(r)/2))) = 1;  % set to 1 because 1 will be removed below
%     
%     for i = 1:length(r) - crit
%         if sum(r(i:i+crit-1)) == crit % all trial from i to i+crit are 0s
%             ok = 0;
%         end
%     end
%     
%     if ~ok
%         fprintf('2: re-shuffling 0 outcomes - not well behaved.\n')
%     end
% end
% seqs(2).rew = r;

%% reward
user.rew    = nan(2,length(user.condition));
user.rew(1,find(user.condition==1)) = round(seqs(1).rew(1:length(find(user.condition==1)))) - 1;
% user.rew(2,find(user.condition==2)) = round(seqs(2).rew(1:length(find(user.condition==2)))) - 1;
if seqs(2).rew > length(find(user.condition==1))
    alert('reward: sequence is longer than the number of trials')
end



%% correlate
try
    fprintf(['correlation reward & effort: r=' num2str(corr(user.rew(find(~isnan(user.rew))),user.thresh(find(~isnan(user.thresh)))),'%.3f') '\n'])
catch
end