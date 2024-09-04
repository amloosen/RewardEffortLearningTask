clear all; close all; clc
x = nan(1,100);
% x = [ones(1,5)*60 ones(1,9)*80 ones(1,5)*50 ones(1,9)*20 ones(1,5)*60 ones(1,15)*25 ones(1,7)*60 ones(1,15)*75 ones(1,15)*35 ones(1,5)*50 ones(1,10)*35];
x = [ones(1,5)*50 ones(1,10)*20 ones(1,5)*60 ones(1,5)*75 ones(1,2)*80 ones(1,5)*65 ones(1,8)*80 ones(1,10)*35 ones(1,5)*20 ones(1,5)*50 ones(1,5)*80 ones(1,10)*60 ones(1,8)*35 ones(1,2)*25 ones(1,5)*50 ones(1,10)*35];
x2 = 100 - [x(51:end) x(1:50)];
cor = corr(x',x2')
v=1;
while abs(cor) > .1
    v = v+1;
    x2 = [x2(v+1:end) x2(1:v)];
    cor = corr(x',x2')
    plot(x,'c'); hold on
    plot(x2,'m'); hold off
    %pause
end

%% smooth
plot(x,'c'); hold on
x = smooth(x,5);
% x = smooth(x,10);
x2 = smooth(x2,5);
% x2 = smooth(x2,10);
plot(x,'g')

% add noise
x = x + randn(100,1)*2;
x2 = x2 + randn(100,1)*2;
plot(x,'m')
hold on;
plot(x2,'b')

corr(x,x2)
%% save
save('tmp_traj3.mat','x','x2')

%% load both seqs
clear all
a = load('tmp_traj2.mat');
b = load('tmp_traj3.mat');

seqs(1).eff = a.x;
seqs(1).rew = round(a.x2)/10;
seqs(2).eff = b.x(end:-1:1);
seqs(2).rew = round(b.x2(end:-1:1))/10;

corr([seqs(1).eff; seqs(2).eff],[seqs(1).rew; seqs(2).rew])

figure()
plot(seqs(1).eff,':','color','k','LineWidth',2)
hold on
plot(seqs(1).rew*10,':','color','m','LineWidth',2)
plot(seqs(2).eff,'color','k','LineWidth',2)
plot(seqs(2).rew*10,'color','m','LineWidth',2)
legend('S1 effort','S1 reward','S2 effort','S2 reward')

% save
save('./stimuli/seqs_2stim.mat','seqs')