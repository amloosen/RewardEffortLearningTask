#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.3),
    on Tue Aug 29 18:18:32 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.3'
expName = 'RewardEffortLearning'  # from the Builder filename that created this script
expInfo = {
    'Handedness': 'r/l',
    'participant': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' %(expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/alisaloosen/Documents/GitHub/RewardEffortTask/start2.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    backgroundImage='', backgroundFit='cover',
    blendMode='avg', useFBO=True, 
    units='norm')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "Instructions" ---
# Run 'Begin Experiment' code from chooseBranch
#Effort and Reward Learning Task
#organized and developed for Psychopy by AL 08/25/23

from psychopy import visual
#initialize scoring variables
#round score
rscore = 0
#total score
tscore = 0
instrText = visual.TextStim(win=win, name='instrText',
    text='Choose Your Task:\n\nProbability of win:\n\nPress A for Easy Task\n1 point',
    font='Arial',
    pos=[0, .3], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
trial_select = keyboard.Keyboard()

# --- Initialize components for Routine "reward_rating" ---
reward = visual.Slider(win=win, name='reward',
    startValue=None, size=(1.0, 0.1), pos=(0, -0.4), units=win.units,
    labels=None, ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=[1.0000, 0.6314, -1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.1,
    flip=False, ori=0.0, depth=0, readOnly=False)
text_rewardRating = visual.TextStim(win=win, name='text_rewardRating',
    text='How many gold rubies do you expect on the next planet?\n',
    font='Arial',
    pos=(0, 0.5), height=0.15, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
text_rewardRating_2 = visual.TextStim(win=win, name='text_rewardRating_2',
    text='Click on the scale to indicate your rating and press ENTER to log it in.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-2.0);
login_reward = keyboard.Keyboard()
coins_little_2 = visual.ImageStim(
    win=win,
    name='coins_little_2', 
    image='image1.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.6, -0.4), size=(0.1,0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
coins_many_2 = visual.ImageStim(
    win=win,
    name='coins_many_2', 
    image='image7.png', mask=None, anchor='center',
    ori=0.0, pos=(0.7, -0.35), size=(0.3,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# --- Initialize components for Routine "effort_rating" ---
effort = visual.Slider(win=win, name='effort',
    startValue=None, size=(1.0, 0.1), pos=(0, -0.4), units=win.units,
    labels=None, ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=[1.0000, 0.6314, -1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.1,
    flip=False, ori=0.0, depth=0, readOnly=False)
text_effortRating_3 = visual.TextStim(win=win, name='text_effortRating_3',
    text='How much battery do you need to get to the next planet?\n',
    font='Arial',
    pos=(0, 0.5), height=0.15, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
text_effortRating_4 = visual.TextStim(win=win, name='text_effortRating_4',
    text='Click on the scale to indicate your rating and press ENTER to log it in.',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-2.0);
effort_reward_2 = keyboard.Keyboard()
battery_empty = visual.ImageStim(
    win=win,
    name='battery_empty', 
    image='./stim/BattEmpty_black-01.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.6, -0.45), size=(0.15,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
battery_full = visual.ImageStim(
    win=win,
    name='battery_full', 
    image='./stim/BattFull_black-01.png', mask=None, anchor='center',
    ori=0.0, pos=(0.6, -0.45), size=(0.15,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)

# --- Initialize components for Routine "cross" ---
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='+',
    font='Arial',
    pos=[0, 0], height=0.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "main_trial" ---
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Arial',
    pos=(0, .5), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
# Run 'Begin Experiment' code from barSize
balloonSize=0.00
# Run 'Begin Experiment' code from countdownEasy
countdownStarted = False
background = visual.Rect(
    win=win, name='background',
    width=[0.2, .55][0], height=[0.2, .55][1],
    ori=0, pos=[0, -0.55], anchor='bottom-center',
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,1,1],
    opacity=1, depth=-4.0, interpolate=True)
barBody = visual.Rect(
    win=win, name='barBody',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0], anchor='bottom-center',
    lineWidth=1,     colorSpace='rgb',  lineColor=[0.0902, -1.0000, -1.0000], fillColor=[0.0902, -1.0000, -1.0000],
    opacity=1, depth=-5.0, interpolate=True)
barTop = visual.Rect(
    win=win, name='barTop',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0], anchor='bottom-center',
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[-1,-1,-1],
    opacity=1, depth=-6.0, interpolate=True)

# --- Initialize components for Routine "Feedback_2" ---
# Run 'Begin Experiment' code from checkPopped
feedbackText=""
feedbackMsg = visual.TextStim(win=win, name='feedbackMsg',
    text='',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
image_next_2 = visual.ImageStim(
    win=win,
    name='image_next_2', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.4), size=(0.3,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "Instructions" ---
continueRoutine = True
# update component parameters for each repeat
# Run 'Begin Routine' code from chooseBranch

if not countdownStarted:
    countdownClock = core.CountdownTimer(5)
    countdownStarted = True
#5 second timer
trial_select.keys = []
trial_select.rt = []
_trial_select_allKeys = []
# keep track of which components have finished
InstructionsComponents = [instrText, trial_select]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Instructions" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # Run 'Each Frame' code from chooseBranch
    timeRemaining = countdownClock.getTime()
    
    if timeRemaining <= 0.0:
        continueRoutine = False
        countdownStarted = False
    
    # *instrText* updates
    
    # if instrText is starting this frame...
    if instrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrText.frameNStart = frameN  # exact frame index
        instrText.tStart = t  # local t and not account for scr refresh
        instrText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instrText.started')
        # update status
        instrText.status = STARTED
        instrText.setAutoDraw(True)
    
    # if instrText is active this frame...
    if instrText.status == STARTED:
        # update params
        pass
    
    # *trial_select* updates
    waitOnFlip = False
    
    # if trial_select is starting this frame...
    if trial_select.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        trial_select.frameNStart = frameN  # exact frame index
        trial_select.tStart = t  # local t and not account for scr refresh
        trial_select.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(trial_select, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'trial_select.started')
        # update status
        trial_select.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(trial_select.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(trial_select.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if trial_select.status == STARTED and not waitOnFlip:
        theseKeys = trial_select.getKeys(keyList=['return'], waitRelease=False)
        _trial_select_allKeys.extend(theseKeys)
        if len(_trial_select_allKeys):
            trial_select.keys = [key.name for key in _trial_select_allKeys]  # storing all keys
            trial_select.rt = [key.rt for key in _trial_select_allKeys]
            trial_select.duration = [key.duration for key in _trial_select_allKeys]
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Instructions" ---
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from chooseBranch
#Press A for easy, B for hard, otherwise chosen randomly after 5 secs
#if trial_select=='a': 
nRepsA=1
nRepsB=0
countdownStarted = False
# check responses
if trial_select.keys in ['', [], None]:  # No response was made
    trial_select.keys = None
thisExp.addData('trial_select.keys',trial_select.keys)
if trial_select.keys != None:  # we had a response
    thisExp.addData('trial_select.rt', trial_select.rt)
    thisExp.addData('trial_select.duration', trial_select.duration)
thisExp.nextEntry()
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
maintask = data.TrialHandler(nReps=5.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    seed=None, name='maintask')
thisExp.addLoop(maintask)  # add the loop to the experiment
thisMaintask = maintask.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisMaintask.rgb)
if thisMaintask != None:
    for paramName in thisMaintask:
        exec('{} = thisMaintask[paramName]'.format(paramName))

for thisMaintask in maintask:
    currentLoop = maintask
    # abbreviate parameter names if possible (e.g. rgb = thisMaintask.rgb)
    if thisMaintask != None:
        for paramName in thisMaintask:
            exec('{} = thisMaintask[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "reward_rating" ---
    continueRoutine = True
    # update component parameters for each repeat
    reward.reset()
    login_reward.keys = []
    login_reward.rt = []
    _login_reward_allKeys = []
    # keep track of which components have finished
    reward_ratingComponents = [reward, text_rewardRating, text_rewardRating_2, login_reward, coins_little_2, coins_many_2]
    for thisComponent in reward_ratingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "reward_rating" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *reward* updates
        
        # if reward is starting this frame...
        if reward.status == NOT_STARTED and frameN >= 1:
            # keep track of start time/frame for later
            reward.frameNStart = frameN  # exact frame index
            reward.tStart = t  # local t and not account for scr refresh
            reward.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'reward.started')
            # update status
            reward.status = STARTED
            reward.setAutoDraw(True)
        
        # if reward is active this frame...
        if reward.status == STARTED:
            # update params
            pass
        
        # *text_rewardRating* updates
        
        # if text_rewardRating is starting this frame...
        if text_rewardRating.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_rewardRating.frameNStart = frameN  # exact frame index
            text_rewardRating.tStart = t  # local t and not account for scr refresh
            text_rewardRating.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_rewardRating, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_rewardRating.started')
            # update status
            text_rewardRating.status = STARTED
            text_rewardRating.setAutoDraw(True)
        
        # if text_rewardRating is active this frame...
        if text_rewardRating.status == STARTED:
            # update params
            pass
        
        # *text_rewardRating_2* updates
        
        # if text_rewardRating_2 is starting this frame...
        if text_rewardRating_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_rewardRating_2.frameNStart = frameN  # exact frame index
            text_rewardRating_2.tStart = t  # local t and not account for scr refresh
            text_rewardRating_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_rewardRating_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_rewardRating_2.started')
            # update status
            text_rewardRating_2.status = STARTED
            text_rewardRating_2.setAutoDraw(True)
        
        # if text_rewardRating_2 is active this frame...
        if text_rewardRating_2.status == STARTED:
            # update params
            pass
        
        # *login_reward* updates
        waitOnFlip = False
        
        # if login_reward is starting this frame...
        if login_reward.status == NOT_STARTED and reward.rating:
            # keep track of start time/frame for later
            login_reward.frameNStart = frameN  # exact frame index
            login_reward.tStart = t  # local t and not account for scr refresh
            login_reward.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(login_reward, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'login_reward.started')
            # update status
            login_reward.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(login_reward.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(login_reward.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if login_reward.status == STARTED and not waitOnFlip:
            theseKeys = login_reward.getKeys(keyList=['return'], waitRelease=False)
            _login_reward_allKeys.extend(theseKeys)
            if len(_login_reward_allKeys):
                login_reward.keys = [key.name for key in _login_reward_allKeys]  # storing all keys
                login_reward.rt = [key.rt for key in _login_reward_allKeys]
                login_reward.duration = [key.duration for key in _login_reward_allKeys]
                # a response ends the routine
                continueRoutine = False
        
        # *coins_little_2* updates
        
        # if coins_little_2 is starting this frame...
        if coins_little_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            coins_little_2.frameNStart = frameN  # exact frame index
            coins_little_2.tStart = t  # local t and not account for scr refresh
            coins_little_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(coins_little_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'coins_little_2.started')
            # update status
            coins_little_2.status = STARTED
            coins_little_2.setAutoDraw(True)
        
        # if coins_little_2 is active this frame...
        if coins_little_2.status == STARTED:
            # update params
            pass
        
        # *coins_many_2* updates
        
        # if coins_many_2 is starting this frame...
        if coins_many_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            coins_many_2.frameNStart = frameN  # exact frame index
            coins_many_2.tStart = t  # local t and not account for scr refresh
            coins_many_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(coins_many_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'coins_many_2.started')
            # update status
            coins_many_2.status = STARTED
            coins_many_2.setAutoDraw(True)
        
        # if coins_many_2 is active this frame...
        if coins_many_2.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in reward_ratingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "reward_rating" ---
    for thisComponent in reward_ratingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    maintask.addData('reward.response', reward.getRating())
    maintask.addData('reward.rt', reward.getRT())
    # check responses
    if login_reward.keys in ['', [], None]:  # No response was made
        login_reward.keys = None
    maintask.addData('login_reward.keys',login_reward.keys)
    if login_reward.keys != None:  # we had a response
        maintask.addData('login_reward.rt', login_reward.rt)
        maintask.addData('login_reward.duration', login_reward.duration)
    # the Routine "reward_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "effort_rating" ---
    continueRoutine = True
    # update component parameters for each repeat
    effort.reset()
    effort_reward_2.keys = []
    effort_reward_2.rt = []
    _effort_reward_2_allKeys = []
    # keep track of which components have finished
    effort_ratingComponents = [effort, text_effortRating_3, text_effortRating_4, effort_reward_2, battery_empty, battery_full]
    for thisComponent in effort_ratingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "effort_rating" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *effort* updates
        
        # if effort is starting this frame...
        if effort.status == NOT_STARTED and frameN >= 1:
            # keep track of start time/frame for later
            effort.frameNStart = frameN  # exact frame index
            effort.tStart = t  # local t and not account for scr refresh
            effort.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(effort, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'effort.started')
            # update status
            effort.status = STARTED
            effort.setAutoDraw(True)
        
        # if effort is active this frame...
        if effort.status == STARTED:
            # update params
            pass
        
        # *text_effortRating_3* updates
        
        # if text_effortRating_3 is starting this frame...
        if text_effortRating_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_effortRating_3.frameNStart = frameN  # exact frame index
            text_effortRating_3.tStart = t  # local t and not account for scr refresh
            text_effortRating_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_effortRating_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_effortRating_3.started')
            # update status
            text_effortRating_3.status = STARTED
            text_effortRating_3.setAutoDraw(True)
        
        # if text_effortRating_3 is active this frame...
        if text_effortRating_3.status == STARTED:
            # update params
            pass
        
        # *text_effortRating_4* updates
        
        # if text_effortRating_4 is starting this frame...
        if text_effortRating_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_effortRating_4.frameNStart = frameN  # exact frame index
            text_effortRating_4.tStart = t  # local t and not account for scr refresh
            text_effortRating_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_effortRating_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_effortRating_4.started')
            # update status
            text_effortRating_4.status = STARTED
            text_effortRating_4.setAutoDraw(True)
        
        # if text_effortRating_4 is active this frame...
        if text_effortRating_4.status == STARTED:
            # update params
            pass
        
        # *effort_reward_2* updates
        waitOnFlip = False
        
        # if effort_reward_2 is starting this frame...
        if effort_reward_2.status == NOT_STARTED and effort.rating:
            # keep track of start time/frame for later
            effort_reward_2.frameNStart = frameN  # exact frame index
            effort_reward_2.tStart = t  # local t and not account for scr refresh
            effort_reward_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(effort_reward_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'effort_reward_2.started')
            # update status
            effort_reward_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(effort_reward_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(effort_reward_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if effort_reward_2.status == STARTED and not waitOnFlip:
            theseKeys = effort_reward_2.getKeys(keyList=['return'], waitRelease=False)
            _effort_reward_2_allKeys.extend(theseKeys)
            if len(_effort_reward_2_allKeys):
                effort_reward_2.keys = [key.name for key in _effort_reward_2_allKeys]  # storing all keys
                effort_reward_2.rt = [key.rt for key in _effort_reward_2_allKeys]
                effort_reward_2.duration = [key.duration for key in _effort_reward_2_allKeys]
                # a response ends the routine
                continueRoutine = False
        
        # *battery_empty* updates
        
        # if battery_empty is starting this frame...
        if battery_empty.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            battery_empty.frameNStart = frameN  # exact frame index
            battery_empty.tStart = t  # local t and not account for scr refresh
            battery_empty.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(battery_empty, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'battery_empty.started')
            # update status
            battery_empty.status = STARTED
            battery_empty.setAutoDraw(True)
        
        # if battery_empty is active this frame...
        if battery_empty.status == STARTED:
            # update params
            pass
        
        # *battery_full* updates
        
        # if battery_full is starting this frame...
        if battery_full.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            battery_full.frameNStart = frameN  # exact frame index
            battery_full.tStart = t  # local t and not account for scr refresh
            battery_full.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(battery_full, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'battery_full.started')
            # update status
            battery_full.status = STARTED
            battery_full.setAutoDraw(True)
        
        # if battery_full is active this frame...
        if battery_full.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in effort_ratingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "effort_rating" ---
    for thisComponent in effort_ratingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    maintask.addData('effort.response', effort.getRating())
    maintask.addData('effort.rt', effort.getRT())
    # check responses
    if effort_reward_2.keys in ['', [], None]:  # No response was made
        effort_reward_2.keys = None
    maintask.addData('effort_reward_2.keys',effort_reward_2.keys)
    if effort_reward_2.keys != None:  # we had a response
        maintask.addData('effort_reward_2.rt', effort_reward_2.rt)
        maintask.addData('effort_reward_2.duration', effort_reward_2.duration)
    # the Routine "effort_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cross" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    crossComponents = [text2_2]
    for thisComponent in crossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "cross" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text2_2* updates
        
        # if text2_2 is starting this frame...
        if text2_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text2_2.frameNStart = frameN  # exact frame index
            text2_2.tStart = t  # local t and not account for scr refresh
            text2_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text2_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text2_2.started')
            # update status
            text2_2.status = STARTED
            text2_2.setAutoDraw(True)
        
        # if text2_2 is active this frame...
        if text2_2.status == STARTED:
            # update params
            pass
        
        # if text2_2 is stopping this frame...
        if text2_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text2_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text2_2.tStop = t  # not accounting for scr refresh
                text2_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text2_2.stopped')
                # update status
                text2_2.status = FINISHED
                text2_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in crossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "cross" ---
    for thisComponent in crossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    
    # --- Prepare to start Routine "main_trial" ---
    continueRoutine = True
    # update component parameters for each repeat
    text_6.setText('Power up!\n')
    # Run 'Begin Routine' code from CheckKeys
    #reset round score to 0
    rscore = 0
    winE=rscore+1
    npumps=0
    maxPumps=10 #max presses to complete a trial
    # Run 'Begin Routine' code from barSize
    #balloon image's starting size
    balloonSize=0.00
    popped=False
    nPumps=0
    # Run 'Begin Routine' code from countdownEasy
    if not countdownStarted:
        countdownClock = core.CountdownTimer(7)
        countdownStarted = True
    #7 second timer
    # keep track of which components have finished
    main_trialComponents = [text_6, background, barBody, barTop]
    for thisComponent in main_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "main_trial" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            pass
        # Run 'Each Frame' code from CheckKeys
        if event.getKeys(['space']):
            npumps+=1
            if npumps>=maxPumps:
                popped=True
                continueRoutine=False
        # Run 'Each Frame' code from barSize
        balloonSize=npumps*0.0184
        # Run 'Each Frame' code from countdownEasy
        timeRemaining = countdownClock.getTime()
        
        if timeRemaining <= 0.0:
            continueRoutine = False # end this trial immediately
            countdownStarted = False
        
        # *background* updates
        
        # if background is starting this frame...
        if background.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            background.frameNStart = frameN  # exact frame index
            background.tStart = t  # local t and not account for scr refresh
            background.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'background.started')
            # update status
            background.status = STARTED
            background.setAutoDraw(True)
        
        # if background is active this frame...
        if background.status == STARTED:
            # update params
            pass
        
        # *barBody* updates
        
        # if barBody is starting this frame...
        if barBody.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            barBody.frameNStart = frameN  # exact frame index
            barBody.tStart = t  # local t and not account for scr refresh
            barBody.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(barBody, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'barBody.started')
            # update status
            barBody.status = STARTED
            barBody.setAutoDraw(True)
        
        # if barBody is active this frame...
        if barBody.status == STARTED:
            # update params
            barBody.setPos([0, -0.55], log=False)
            barBody.setSize([.2, balloonSize], log=False)
        
        # *barTop* updates
        
        # if barTop is starting this frame...
        if barTop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            barTop.frameNStart = frameN  # exact frame index
            barTop.tStart = t  # local t and not account for scr refresh
            barTop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(barTop, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'barTop.started')
            # update status
            barTop.status = STARTED
            barTop.setAutoDraw(True)
        
        # if barTop is active this frame...
        if barTop.status == STARTED:
            # update params
            barTop.setPos([0, 0], log=False)
            barTop.setSize([.1, 0.01], log=False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in main_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "main_trial" ---
    for thisComponent in main_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from CheckKeys
    #probability 3 is 50%, 26 is 88%, 51 is 12% chance to earn points
    if npumps>=maxPumps:
       rscore=rscore+1
    
    #add current round score to total score
    tscore += rscore
    
    maintask.addData('# of presses', npumps)
    maintask.addData('round score', rscore)
    # Run 'End Routine' code from countdownEasy
    countdownStarted = False
    # the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Feedback_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from checkPopped
    if popped==True:
        feedbackText=FeedbackText1
    else:
        feedbackText=FeedbackText2
    feedbackMsg.setText(feedbackText)
    image_next_2.setImage(stimFile)
    # keep track of which components have finished
    Feedback_2Components = [feedbackMsg, image_next_2]
    for thisComponent in Feedback_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Feedback_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedbackMsg* updates
        
        # if feedbackMsg is starting this frame...
        if feedbackMsg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackMsg.frameNStart = frameN  # exact frame index
            feedbackMsg.tStart = t  # local t and not account for scr refresh
            feedbackMsg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackMsg, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'feedbackMsg.started')
            # update status
            feedbackMsg.status = STARTED
            feedbackMsg.setAutoDraw(True)
        
        # if feedbackMsg is active this frame...
        if feedbackMsg.status == STARTED:
            # update params
            pass
        
        # if feedbackMsg is stopping this frame...
        if feedbackMsg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedbackMsg.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                feedbackMsg.tStop = t  # not accounting for scr refresh
                feedbackMsg.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedbackMsg.stopped')
                # update status
                feedbackMsg.status = FINISHED
                feedbackMsg.setAutoDraw(False)
        
        # *image_next_2* updates
        
        # if image_next_2 is starting this frame...
        if image_next_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_next_2.frameNStart = frameN  # exact frame index
            image_next_2.tStart = t  # local t and not account for scr refresh
            image_next_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_next_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_next_2.started')
            # update status
            image_next_2.status = STARTED
            image_next_2.setAutoDraw(True)
        
        # if image_next_2 is active this frame...
        if image_next_2.status == STARTED:
            # update params
            pass
        
        # if image_next_2 is stopping this frame...
        if image_next_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_next_2.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                image_next_2.tStop = t  # not accounting for scr refresh
                image_next_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_next_2.stopped')
                # update status
                image_next_2.status = FINISHED
                image_next_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Feedback_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Feedback_2" ---
    for thisComponent in Feedback_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
# completed 5.0 repeats of 'maintask'


# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()