function EL_pract_initialize(userID,debug)

clear params
global params;

params.general.wd_pract_file    = 'seqs_1.mat';
params.task.exp.n_blocks        = 2;
params.task.exp.n_trials        = 30;
params.task.exp.n_nulls         = 30;%number of 0s that should be in the reward values

%% task parameters
params.task.taskversion             = 'v1_intracr_pilot';
params.task.taskversion_date        = [2023 11 02];
params.task.author                  = 'AL';
params.task.modifier                = 'AL';

end