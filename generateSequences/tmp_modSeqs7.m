corr([seqs(1).eff; seqs(2).eff],round([seqs(1).rew; seqs(2).rew]))
scatter([seqs(1).eff; seqs(2).eff],round([seqs(1).rew; seqs(2).rew]))
%%
clc
bins = 1:7;
for i = 1:length(bins)
    for c = 1:2
        tmp{c} = find(round(seqs(c).rew)==bins(i)+1);
    end
    bin{i} = [seqs(1).eff(tmp{1}); seqs(2).eff(tmp{2})];
    fprintf([int2str(i) ': ' num2str(mean(bin{i})) char(177)  num2str(std(bin{i})) '\n'])
end

%%

save('./stimuli/seqs_2stim8.mat','seqs')