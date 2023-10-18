﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.3),
    on Wed Oct 18 17:02:21 2023
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
    originPath='/Users/alisaloosen/Documents/GitHub/RewardEffortLearningTask/RewardEffortLearningTask_lastrun.py',
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
    size=[1440, 900], fullscr=False, screen=0, 
    winType='pyglet', allowStencil=True,
    monitor='testMonitor', color=[-1.0000, -1.0000, -0.2471], colorSpace='rgb',
    backgroundImage='', backgroundFit='cover',
    blendMode='avg', useFBO=True, 
    units='norm')
win.mouseVisible = True
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

# --- Initialize components for Routine "practice_instruction_vid" ---
instrText_2 = visual.TextStim(win=win, name='instrText_2',
    text='[Placeholder Intro Video\n]',
    font='Arial',
    pos=[0, .3], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trial_select_2 = keyboard.Keyboard()

# --- Initialize components for Routine "practice_instructions" ---
# Run 'Begin Experiment' code from selectText
instructions1 = ""
instructions2 = ""
instructions3 = ""


practice_intro_text1 = visual.TextStim(win=win, name='practice_intro_text1',
    text=instructions1
,
    font='Arial',
    pos=(0, 0.55), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
practice_intro_text2 = visual.TextStim(win=win, name='practice_intro_text2',
    text=instructions2,
    font='Arial',
    pos=(0, -0.30), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
practice_intro_text3 = visual.TextStim(win=win, name='practice_intro_text3',
    text=instructions3,
    font='Arial',
    pos=(0, -0.4), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
practice_start = keyboard.Keyboard()

# --- Initialize components for Routine "practice" ---
pract_text = visual.TextStim(win=win, name='pract_text',
    text='',
    font='Arial',
    pos=(0, .5), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
# Run 'Begin Experiment' code from CheckKeys_2
max_press_pract = []  # Initialize max_press
max_press_pSec_pract = -1

# Run 'Begin Experiment' code from countdownEasy_3
countdownStarted = False
timeAvailable = 5


# Run 'Begin Experiment' code from barSize_2
batterySize=0.00
batteryMaxSize=0.55

tank_2 = visual.ImageStim(
    win=win,
    name='tank_2', 
    image='TankOnlyEmpt-01.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.5,2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
background_4 = visual.Rect(
    win=win, name='background_4',
    width=[0.15, batteryMaxSize][0], height=[0.15, batteryMaxSize][1],
    ori=0, pos=[-0.5, -0.5], anchor='bottom-center',
    lineWidth=2,     colorSpace='rgb',  lineColor='0.0902, -1.0000, -1.0000', fillColor='0.0902, -1.0000, -1.0000',
    opacity=1, depth=-5.0, interpolate=True)
background_outline = visual.Rect(
    win=win, name='background_outline',
    width=[0.15, batteryMaxSize][0], height=[0.15, batteryMaxSize][1],
    ori=0, pos=[0, -0.5], anchor='bottom-center',
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1.0000, 1.0000, 1.0000],
    opacity=1, depth=-6.0, interpolate=True)
barBody_2 = visual.Rect(
    win=win, name='barBody_2',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0], anchor='bottom-center',
    lineWidth=1,     colorSpace='rgb',  lineColor="'#2b773e'", fillColor="'#2b773e'",
    opacity=1, depth=-7.0, interpolate=True)
treshLine = visual.Line(
    win=win, name='treshLine',
    start=(-[0.15, .1][0]/2.0, 0), end=(+[0.15, .1][0]/2.0, 0),
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=4.0,     colorSpace='rgb',  lineColor='red', fillColor='red',
    opacity=None, depth=-8.0, interpolate=True)
photodiode_pr1 = visual.ShapeStim(
    win=win, name='photodiode_pr1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-9.0, interpolate=True)

# --- Initialize components for Routine "practice_feedback" ---
# Run 'Begin Experiment' code from checkAchieved_pract
feedbackText=""
feedbackTime=3


feedbackMsg_pract = visual.TextStim(win=win, name='feedbackMsg_pract',
    text='',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
photodiode_pr2 = visual.ShapeStim(
    win=win, name='photodiode_pr2', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)

# --- Initialize components for Routine "Instructions" ---
instrText = visual.TextStim(win=win, name='instrText',
    text='[Placeholder Intro Video\n]',
    font='Arial',
    pos=[0, .3], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trial_select = keyboard.Keyboard()
# Run 'Begin Experiment' code from init_mainexp
rscore = 0
#total score
tscore = 0


# --- Initialize components for Routine "instr_quiz" ---
Multiple_Choice1 = visual.TextStim(win=win, name='Multiple_Choice1',
    text='',
    font='Arial',
    pos=(0, 0.6), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
press_enter = visual.TextStim(win=win, name='press_enter',
    text='Press ENTER to log in your response.',
    font='Arial',
    pos=(0, 0.3), height=0.08, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=-1.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
box1 = visual.TextBox2(
     win, text='', placeholder='Type here...', font='Arial',
     pos=(0, 0.1),     letterHeight=0.08,
     size=(1.5, 0.2), borderWidth=2.0,
     color='grey', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0, speechPoint=None,
     padding=0.0, alignment='center',
     anchor='center', overflow='visible',
     fillColor=[1,1,1], borderColor=[0.3569, 0.6941, 0.8039],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='box1',
     depth=-3, autoLog=True,
)
box2 = visual.TextBox2(
     win, text='', placeholder='Type here...', font='Arial',
     pos=(0, -0.2),     letterHeight=0.08,
     size=(1.5, 0.2), borderWidth=2.0,
     color='grey', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0, speechPoint=None,
     padding=0.0, alignment='center',
     anchor='center', overflow='visible',
     fillColor=[1,1,1], borderColor=[0.3569, 0.6941, 0.8039],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='box2',
     depth=-4, autoLog=True,
)
box3 = visual.TextBox2(
     win, text='', placeholder='Type here...', font='Arial',
     pos=(0, -0.5),     letterHeight=0.08,
     size=(1.5, 0.2), borderWidth=2.0,
     color='grey', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0, speechPoint=None,
     padding=0.0, alignment='center',
     anchor='center', overflow='visible',
     fillColor=[1,1,1], borderColor=[0.3569, 0.6941, 0.8039],
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=False,
     name='box3',
     depth=-5, autoLog=True,
)
# Run 'Begin Experiment' code from code
quiz_score = 0
clickables = [box1, box2, box3]


restart_loop = False


next_quest = keyboard.Keyboard()

# --- Initialize components for Routine "check" ---
FeedbackQuiz2 = visual.TextStim(win=win, name='FeedbackQuiz2',
    text='',
    font='Arial',
    pos=(0, 0.6), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
FeedbackQuiz1 = visual.TextStim(win=win, name='FeedbackQuiz1',
    text='',
    font='Arial',
    pos=(0, 0.6), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
image_rocket = visual.ImageStim(
    win=win,
    name='image_rocket', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.4), size=(0.3,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

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
# Run 'Begin Experiment' code from get_rating_2
reward_ratings = []
photodiode_r1 = visual.ShapeStim(
    win=win, name='photodiode_r1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-7.0, interpolate=True)

# --- Initialize components for Routine "cross" ---
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='+',
    font='Arial',
    pos=[0, 0], height=0.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
photodiode_fix1 = visual.ShapeStim(
    win=win, name='photodiode_fix1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)

# --- Initialize components for Routine "effort_rating" ---
effort = visual.Slider(win=win, name='effort',
    startValue=None, size=(1.0, 0.1), pos=(0, -0.4), units=win.units,
    labels=None, ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=[1.0000, 0.6314, -1.0000], lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.1,
    flip=False, ori=0.0, depth=0, readOnly=False)
text_effortRating_3 = visual.TextStim(win=win, name='text_effortRating_3',
    text='How much fuel do you think you will need to get to the next planet?\n',
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
fuel_empty = visual.ImageStim(
    win=win,
    name='fuel_empty', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.7, -0.3), size=(0.2,0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
fuel_full = visual.ImageStim(
    win=win,
    name='fuel_full', 
    image='fuelShipFull-01.png', mask=None, anchor='center',
    ori=0.0, pos=(0.7, -0.3), size=(0.34,0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
# Run 'Begin Experiment' code from get_rating
effort_ratings = []
photodiode_r1_2 = visual.ShapeStim(
    win=win, name='photodiode_r1_2', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-7.0, interpolate=True)

# --- Initialize components for Routine "cross" ---
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='+',
    font='Arial',
    pos=[0, 0], height=0.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
photodiode_fix1 = visual.ShapeStim(
    win=win, name='photodiode_fix1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)

# --- Initialize components for Routine "main_trial" ---
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Arial',
    pos=(0, .5), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
# Run 'Begin Experiment' code from barSize
batterySize=0.00
batteryMaxSize=0.55
# Run 'Begin Experiment' code from countdownEasy
countdownStarted = False
tank = visual.ImageStim(
    win=win,
    name='tank', 
    image='TankOnlyEmpt-01.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.5,2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
background = visual.Rect(
    win=win, name='background',
    width=[0.15, batteryMaxSize][0], height=[0.15, batteryMaxSize][1],
    ori=0, pos=[0, -0.5], anchor='bottom-center',
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,1,1],
    opacity=1, depth=-5.0, interpolate=True)
barBody = visual.Rect(
    win=win, name='barBody',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0], anchor='bottom-center',
    lineWidth=1,     colorSpace='rgb',  lineColor="'#2b773e'", fillColor="'#2b773e'",
    opacity=1, depth=-6.0, interpolate=True)
photodiode_mt1 = visual.ShapeStim(
    win=win, name='photodiode_mt1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-7.0, interpolate=True)

# --- Initialize components for Routine "cross" ---
text2_2 = visual.TextStim(win=win, name='text2_2',
    text='+',
    font='Arial',
    pos=[0, 0], height=0.5, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
photodiode_fix1 = visual.ShapeStim(
    win=win, name='photodiode_fix1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)

# --- Initialize components for Routine "Feedback_2" ---
# Run 'Begin Experiment' code from checkAchieved
feedbackText=""
feedbackTime=3


feedbackMsg = visual.TextStim(win=win, name='feedbackMsg',
    text='',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
image_rubies = visual.ImageStim(
    win=win,
    name='image_rubies', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, -0.4), size=(0.3,0.3),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
photodiode_ft1 = visual.ShapeStim(
    win=win, name='photodiode_ft1', vertices=None,
    size=(0.45, 0.45),
    ori=0.0, pos=(-1,-1), anchor='bottom-left',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "practice_instruction_vid" ---
continueRoutine = True
# update component parameters for each repeat
trial_select_2.keys = []
trial_select_2.rt = []
_trial_select_2_allKeys = []
# keep track of which components have finished
practice_instruction_vidComponents = [instrText_2, trial_select_2]
for thisComponent in practice_instruction_vidComponents:
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

# --- Run Routine "practice_instruction_vid" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instrText_2* updates
    
    # if instrText_2 is starting this frame...
    if instrText_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrText_2.frameNStart = frameN  # exact frame index
        instrText_2.tStart = t  # local t and not account for scr refresh
        instrText_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrText_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instrText_2.started')
        # update status
        instrText_2.status = STARTED
        instrText_2.setAutoDraw(True)
    
    # if instrText_2 is active this frame...
    if instrText_2.status == STARTED:
        # update params
        pass
    
    # *trial_select_2* updates
    waitOnFlip = False
    
    # if trial_select_2 is starting this frame...
    if trial_select_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        trial_select_2.frameNStart = frameN  # exact frame index
        trial_select_2.tStart = t  # local t and not account for scr refresh
        trial_select_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(trial_select_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'trial_select_2.started')
        # update status
        trial_select_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(trial_select_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(trial_select_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if trial_select_2.status == STARTED and not waitOnFlip:
        theseKeys = trial_select_2.getKeys(keyList=['return'], waitRelease=False)
        _trial_select_2_allKeys.extend(theseKeys)
        if len(_trial_select_2_allKeys):
            trial_select_2.keys = [key.name for key in _trial_select_2_allKeys]  # storing all keys
            trial_select_2.rt = [key.rt for key in _trial_select_2_allKeys]
            trial_select_2.duration = [key.duration for key in _trial_select_2_allKeys]
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
    for thisComponent in practice_instruction_vidComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "practice_instruction_vid" ---
for thisComponent in practice_instruction_vidComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if trial_select_2.keys in ['', [], None]:  # No response was made
    trial_select_2.keys = None
thisExp.addData('trial_select_2.keys',trial_select_2.keys)
if trial_select_2.keys != None:  # we had a response
    thisExp.addData('trial_select_2.rt', trial_select_2.rt)
    thisExp.addData('trial_select_2.duration', trial_select_2.duration)
thisExp.nextEntry()
# the Routine "practice_instruction_vid" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
instruct_slides = data.TrialHandler(nReps=2.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='instruct_slides')
thisExp.addLoop(instruct_slides)  # add the loop to the experiment
thisInstruct_slide = instruct_slides.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstruct_slide.rgb)
if thisInstruct_slide != None:
    for paramName in thisInstruct_slide:
        exec('{} = thisInstruct_slide[paramName]'.format(paramName))

for thisInstruct_slide in instruct_slides:
    currentLoop = instruct_slides
    # abbreviate parameter names if possible (e.g. rgb = thisInstruct_slide.rgb)
    if thisInstruct_slide != None:
        for paramName in thisInstruct_slide:
            exec('{} = thisInstruct_slide[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "practice_instructions" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from selectText
    if instruct_slides.thisN == 1:
        instructions1="On the next screen, you will encounter a fuel tank marked with a red line. Your goal is to fill it up to the red line, just as demonstrated in the video."
        instructions2=""
        instructions3=""
        #picture=imgExample1.png
    else:
        instructions1="Alternate between pressing ''z'' with your left index finger and ''p'' with your right index finger as fast as you can to reach the red bar."
        instructions2="You will have 5 seconds."
        instructions3="Press ENTER to Start!"
        #picture=imgExample2.png
    practice_start.keys = []
    practice_start.rt = []
    _practice_start_allKeys = []
    # keep track of which components have finished
    practice_instructionsComponents = [practice_intro_text1, practice_intro_text2, practice_intro_text3, practice_start]
    for thisComponent in practice_instructionsComponents:
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
    
    # --- Run Routine "practice_instructions" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *practice_intro_text1* updates
        
        # if practice_intro_text1 is starting this frame...
        if practice_intro_text1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_intro_text1.frameNStart = frameN  # exact frame index
            practice_intro_text1.tStart = t  # local t and not account for scr refresh
            practice_intro_text1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_intro_text1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practice_intro_text1.started')
            # update status
            practice_intro_text1.status = STARTED
            practice_intro_text1.setAutoDraw(True)
        
        # if practice_intro_text1 is active this frame...
        if practice_intro_text1.status == STARTED:
            # update params
            pass
        
        # *practice_intro_text2* updates
        
        # if practice_intro_text2 is starting this frame...
        if practice_intro_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_intro_text2.frameNStart = frameN  # exact frame index
            practice_intro_text2.tStart = t  # local t and not account for scr refresh
            practice_intro_text2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_intro_text2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practice_intro_text2.started')
            # update status
            practice_intro_text2.status = STARTED
            practice_intro_text2.setAutoDraw(True)
        
        # if practice_intro_text2 is active this frame...
        if practice_intro_text2.status == STARTED:
            # update params
            pass
        
        # *practice_intro_text3* updates
        
        # if practice_intro_text3 is starting this frame...
        if practice_intro_text3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_intro_text3.frameNStart = frameN  # exact frame index
            practice_intro_text3.tStart = t  # local t and not account for scr refresh
            practice_intro_text3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_intro_text3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practice_intro_text3.started')
            # update status
            practice_intro_text3.status = STARTED
            practice_intro_text3.setAutoDraw(True)
        
        # if practice_intro_text3 is active this frame...
        if practice_intro_text3.status == STARTED:
            # update params
            pass
        
        # *practice_start* updates
        waitOnFlip = False
        
        # if practice_start is starting this frame...
        if practice_start.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            practice_start.frameNStart = frameN  # exact frame index
            practice_start.tStart = t  # local t and not account for scr refresh
            practice_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_start, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practice_start.started')
            # update status
            practice_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(practice_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(practice_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if practice_start.status == STARTED and not waitOnFlip:
            theseKeys = practice_start.getKeys(keyList=['return'], waitRelease=False)
            _practice_start_allKeys.extend(theseKeys)
            if len(_practice_start_allKeys):
                practice_start.keys = [key.name for key in _practice_start_allKeys]  # storing all keys
                practice_start.rt = [key.rt for key in _practice_start_allKeys]
                practice_start.duration = [key.duration for key in _practice_start_allKeys]
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
        for thisComponent in practice_instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "practice_instructions" ---
    for thisComponent in practice_instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if practice_start.keys in ['', [], None]:  # No response was made
        practice_start.keys = None
    instruct_slides.addData('practice_start.keys',practice_start.keys)
    if practice_start.keys != None:  # we had a response
        instruct_slides.addData('practice_start.rt', practice_start.rt)
        instruct_slides.addData('practice_start.duration', practice_start.duration)
    # the Routine "practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 2.0 repeats of 'instruct_slides'


# set up handler to look after randomisation of conditions etc
practicetrials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('pract1.xlsx'),
    seed=None, name='practicetrials')
thisExp.addLoop(practicetrials)  # add the loop to the experiment
thisPracticetrial = practicetrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPracticetrial.rgb)
if thisPracticetrial != None:
    for paramName in thisPracticetrial:
        exec('{} = thisPracticetrial[paramName]'.format(paramName))

for thisPracticetrial in practicetrials:
    currentLoop = practicetrials
    # abbreviate parameter names if possible (e.g. rgb = thisPracticetrial.rgb)
    if thisPracticetrial != None:
        for paramName in thisPracticetrial:
            exec('{} = thisPracticetrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "practice" ---
    continueRoutine = True
    # update component parameters for each repeat
    pract_text.setText('Power up and try to reach the red bar!\n')
    # Run 'Begin Routine' code from CheckKeys_2
    #reset round score to 0
    rscore = 0
    npumps = 0
    maxPumps = practPumps #max presses to complete a trial
    key_sequence = []  # List to store the key sequence ('z' followed by 'p')
    achieved = 0
    firstPump = False
    
    # Run 'Begin Routine' code from countdownEasy_3
    if not countdownStarted:
            countdownClock = core.CountdownTimer(timeAvailable)
            countdownStarted = True
    # Run 'Begin Routine' code from barSize_2
    batterySize=0.00
    achieved=False
    nPumps=0
    batterySizeIncr = batteryMaxSize/30
    
    treshLine.setPos([0, effTresh])
    # keep track of which components have finished
    practiceComponents = [pract_text, tank_2, background_4, background_outline, barBody_2, treshLine, photodiode_pr1]
    for thisComponent in practiceComponents:
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
    
    # --- Run Routine "practice" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pract_text* updates
        
        # if pract_text is starting this frame...
        if pract_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pract_text.frameNStart = frameN  # exact frame index
            pract_text.tStart = t  # local t and not account for scr refresh
            pract_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pract_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'pract_text.started')
            # update status
            pract_text.status = STARTED
            pract_text.setAutoDraw(True)
        
        # if pract_text is active this frame...
        if pract_text.status == STARTED:
            # update params
            pass
        # Run 'Each Frame' code from CheckKeys_2
        # Check for key presses
        keys = event.getKeys()
        
        if keys:
            key_pressed = keys[0]
        
            # Check if the key pressed is 'z' and it's the first key in the sequence
            if key_pressed == 'z' and not key_sequence:
                key_sequence.append(key_pressed)
            # Check if the key pressed is 'p' and 'z' was pressed before it
            elif key_pressed == 'p' and 'z' in key_sequence:
                key_sequence.append(key_pressed)
            # If the sequence is complete ('z' followed by 'p'), increase the size of the shape
            if key_sequence == ['z', 'p']:
                npumps += 1
                key_sequence = []  
                if practicetrials.thisN == 0:
                    firstPump = True # Reset the key sequence
        
        if (-0.5+batterySize >= effTresh):
             achieved = True
             rscore = rscore+1
        # Run 'Each Frame' code from countdownEasy_3
        timeRemaining = countdownClock.getTime()
        
        if timeRemaining <= 0.0 or (-0.5+ batterySize >=effTresh):
            continueRoutine = False  # End this trial immediately
            countdownStarted = False
        # Run 'Each Frame' code from barSize_2
        batterySize=npumps*batterySizeIncr
        
        # *tank_2* updates
        
        # if tank_2 is starting this frame...
        if tank_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            tank_2.frameNStart = frameN  # exact frame index
            tank_2.tStart = t  # local t and not account for scr refresh
            tank_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tank_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'tank_2.started')
            # update status
            tank_2.status = STARTED
            tank_2.setAutoDraw(True)
        
        # if tank_2 is active this frame...
        if tank_2.status == STARTED:
            # update params
            pass
        
        # *background_4* updates
        
        # if background_4 is starting this frame...
        if background_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            background_4.frameNStart = frameN  # exact frame index
            background_4.tStart = t  # local t and not account for scr refresh
            background_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'background_4.started')
            # update status
            background_4.status = STARTED
            background_4.setAutoDraw(True)
        
        # if background_4 is active this frame...
        if background_4.status == STARTED:
            # update params
            pass
        
        # *background_outline* updates
        
        # if background_outline is starting this frame...
        if background_outline.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            background_outline.frameNStart = frameN  # exact frame index
            background_outline.tStart = t  # local t and not account for scr refresh
            background_outline.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(background_outline, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'background_outline.started')
            # update status
            background_outline.status = STARTED
            background_outline.setAutoDraw(True)
        
        # if background_outline is active this frame...
        if background_outline.status == STARTED:
            # update params
            pass
        
        # *barBody_2* updates
        
        # if barBody_2 is starting this frame...
        if barBody_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            barBody_2.frameNStart = frameN  # exact frame index
            barBody_2.tStart = t  # local t and not account for scr refresh
            barBody_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(barBody_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'barBody_2.started')
            # update status
            barBody_2.status = STARTED
            barBody_2.setAutoDraw(True)
        
        # if barBody_2 is active this frame...
        if barBody_2.status == STARTED:
            # update params
            barBody_2.setPos([0, -0.5], log=False)
            barBody_2.setSize([.15, batterySize], log=False)
        
        # *treshLine* updates
        
        # if treshLine is starting this frame...
        if treshLine.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            treshLine.frameNStart = frameN  # exact frame index
            treshLine.tStart = t  # local t and not account for scr refresh
            treshLine.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(treshLine, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'treshLine.started')
            # update status
            treshLine.status = STARTED
            treshLine.setAutoDraw(True)
        
        # if treshLine is active this frame...
        if treshLine.status == STARTED:
            # update params
            pass
        
        # *photodiode_pr1* updates
        
        # if photodiode_pr1 is starting this frame...
        if photodiode_pr1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_pr1.frameNStart = frameN  # exact frame index
            photodiode_pr1.tStart = t  # local t and not account for scr refresh
            photodiode_pr1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_pr1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_pr1.started')
            # update status
            photodiode_pr1.status = STARTED
            photodiode_pr1.setAutoDraw(True)
        
        # if photodiode_pr1 is active this frame...
        if photodiode_pr1.status == STARTED:
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
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "practice" ---
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from CheckKeys_2
    #add current round score to total score
    tscore += rscore
    
    npumps_pSec = npumps/t
    max_press_pract.append(npumps_pSec)
    max_press_pSec_pract = max(max_press_pract)
    
    practicetrials.addData('# of presses', npumps)
    practicetrials.addData('trial score', rscore)
    practicetrials.addData('treshold', effTresh)
    practicetrials.addData('max_press_pract', max_press_pract)
    practicetrials.addData('trial_duration', t) 
    practicetrials.addData('max_press_pSec_pract',max_press_pSec_pract)
    # Run 'End Routine' code from countdownEasy_3
    countdownStarted = False
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "practice_feedback" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from checkAchieved_pract
    if achieved==True:
        feedbackText= 'Well done you reached the treshold!'
        
    else:
        feedbackText= 'Not quite there yet. Add a bit more power!'
        
    feedbackMsg_pract.setText(feedbackText)
    # keep track of which components have finished
    practice_feedbackComponents = [feedbackMsg_pract, photodiode_pr2]
    for thisComponent in practice_feedbackComponents:
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
    
    # --- Run Routine "practice_feedback" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedbackMsg_pract* updates
        
        # if feedbackMsg_pract is starting this frame...
        if feedbackMsg_pract.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackMsg_pract.frameNStart = frameN  # exact frame index
            feedbackMsg_pract.tStart = t  # local t and not account for scr refresh
            feedbackMsg_pract.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackMsg_pract, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'feedbackMsg_pract.started')
            # update status
            feedbackMsg_pract.status = STARTED
            feedbackMsg_pract.setAutoDraw(True)
        
        # if feedbackMsg_pract is active this frame...
        if feedbackMsg_pract.status == STARTED:
            # update params
            pass
        
        # if feedbackMsg_pract is stopping this frame...
        if feedbackMsg_pract.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedbackMsg_pract.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                feedbackMsg_pract.tStop = t  # not accounting for scr refresh
                feedbackMsg_pract.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedbackMsg_pract.stopped')
                # update status
                feedbackMsg_pract.status = FINISHED
                feedbackMsg_pract.setAutoDraw(False)
        
        # *photodiode_pr2* updates
        
        # if photodiode_pr2 is starting this frame...
        if photodiode_pr2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_pr2.frameNStart = frameN  # exact frame index
            photodiode_pr2.tStart = t  # local t and not account for scr refresh
            photodiode_pr2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_pr2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_pr2.started')
            # update status
            photodiode_pr2.status = STARTED
            photodiode_pr2.setAutoDraw(True)
        
        # if photodiode_pr2 is active this frame...
        if photodiode_pr2.status == STARTED:
            # update params
            pass
        
        # if photodiode_pr2 is stopping this frame...
        if photodiode_pr2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > photodiode_pr2.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                photodiode_pr2.tStop = t  # not accounting for scr refresh
                photodiode_pr2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'photodiode_pr2.stopped')
                # update status
                photodiode_pr2.status = FINISHED
                photodiode_pr2.setAutoDraw(False)
        
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
        for thisComponent in practice_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "practice_feedback" ---
    for thisComponent in practice_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practicetrials'


# --- Prepare to start Routine "Instructions" ---
continueRoutine = True
# update component parameters for each repeat
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
instructionquiz_rep = data.TrialHandler(nReps=3.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='instructionquiz_rep')
thisExp.addLoop(instructionquiz_rep)  # add the loop to the experiment
thisInstructionquiz_rep = instructionquiz_rep.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstructionquiz_rep.rgb)
if thisInstructionquiz_rep != None:
    for paramName in thisInstructionquiz_rep:
        exec('{} = thisInstructionquiz_rep[paramName]'.format(paramName))

for thisInstructionquiz_rep in instructionquiz_rep:
    currentLoop = instructionquiz_rep
    # abbreviate parameter names if possible (e.g. rgb = thisInstructionquiz_rep.rgb)
    if thisInstructionquiz_rep != None:
        for paramName in thisInstructionquiz_rep:
            exec('{} = thisInstructionquiz_rep[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    instructionquiz = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('quiz.xlsx'),
        seed=None, name='instructionquiz')
    thisExp.addLoop(instructionquiz)  # add the loop to the experiment
    thisInstructionquiz = instructionquiz.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstructionquiz.rgb)
    if thisInstructionquiz != None:
        for paramName in thisInstructionquiz:
            exec('{} = thisInstructionquiz[paramName]'.format(paramName))
    
    for thisInstructionquiz in instructionquiz:
        currentLoop = instructionquiz
        # abbreviate parameter names if possible (e.g. rgb = thisInstructionquiz.rgb)
        if thisInstructionquiz != None:
            for paramName in thisInstructionquiz:
                exec('{} = thisInstructionquiz[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "instr_quiz" ---
        continueRoutine = True
        # update component parameters for each repeat
        Multiple_Choice1.setText(question)
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        box1.reset()
        box1.setText(resp1)
        box2.reset()
        box2.setText(resp2
)
        box3.reset()
        box3.setText(resp3
)
        # Run 'Begin Routine' code from code
        clicked_box = None # Initialize a variable to store the clicked box
        response = 0
        correct = None
        for box in clickables:
                    box.fillColor = 'white'
        next_quest.keys = []
        next_quest.rt = []
        _next_quest_allKeys = []
        # keep track of which components have finished
        instr_quizComponents = [Multiple_Choice1, press_enter, mouse, box1, box2, box3, next_quest]
        for thisComponent in instr_quizComponents:
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
        
        # --- Run Routine "instr_quiz" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Multiple_Choice1* updates
            
            # if Multiple_Choice1 is starting this frame...
            if Multiple_Choice1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Multiple_Choice1.frameNStart = frameN  # exact frame index
                Multiple_Choice1.tStart = t  # local t and not account for scr refresh
                Multiple_Choice1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Multiple_Choice1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Multiple_Choice1.started')
                # update status
                Multiple_Choice1.status = STARTED
                Multiple_Choice1.setAutoDraw(True)
            
            # if Multiple_Choice1 is active this frame...
            if Multiple_Choice1.status == STARTED:
                # update params
                pass
            
            # *press_enter* updates
            
            # if press_enter is starting this frame...
            if press_enter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                press_enter.frameNStart = frameN  # exact frame index
                press_enter.tStart = t  # local t and not account for scr refresh
                press_enter.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(press_enter, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'press_enter.started')
                # update status
                press_enter.status = STARTED
                press_enter.setAutoDraw(True)
            
            # if press_enter is active this frame...
            if press_enter.status == STARTED:
                # update params
                pass
            # *mouse* updates
            
            # if mouse is starting this frame...
            if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse.started', t)
                # update status
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([box1, box2, box3], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse):
                                gotValidClick = True
                                mouse.clicked_name.append(obj.name)
                        x, y = mouse.getPos()
                        mouse.x.append(x)
                        mouse.y.append(y)
                        buttons = mouse.getPressed()
                        mouse.leftButton.append(buttons[0])
                        mouse.midButton.append(buttons[1])
                        mouse.rightButton.append(buttons[2])
                        mouse.time.append(mouse.mouseClock.getTime())
            
            # *box1* updates
            
            # if box1 is starting this frame...
            if box1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box1.frameNStart = frameN  # exact frame index
                box1.tStart = t  # local t and not account for scr refresh
                box1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'box1.started')
                # update status
                box1.status = STARTED
                box1.setAutoDraw(True)
            
            # if box1 is active this frame...
            if box1.status == STARTED:
                # update params
                pass
            
            # *box2* updates
            
            # if box2 is starting this frame...
            if box2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box2.frameNStart = frameN  # exact frame index
                box2.tStart = t  # local t and not account for scr refresh
                box2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'box2.started')
                # update status
                box2.status = STARTED
                box2.setAutoDraw(True)
            
            # if box2 is active this frame...
            if box2.status == STARTED:
                # update params
                pass
            
            # *box3* updates
            
            # if box3 is starting this frame...
            if box3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                box3.frameNStart = frameN  # exact frame index
                box3.tStart = t  # local t and not account for scr refresh
                box3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(box3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'box3.started')
                # update status
                box3.status = STARTED
                box3.setAutoDraw(True)
            
            # if box3 is active this frame...
            if box3.status == STARTED:
                # update params
                pass
            # Run 'Each Frame' code from code
            # Check if the mouse is pressed in any of the boxes
            for clickable in clickables:
                if mouse.isPressedIn(clickable):
                    # Reset the color of all boxes to white
                    for box in clickables:
                        box.fillColor = 'white'
                    
                    # Change the color of the clicked box to blue
                    clickable.fillColor = 'lightblue'
                    clicked_box = clickable
            
            # Assign a value to a new variable based on the clicked box
            if clicked_box == box1:
                response = 1
            elif clicked_box == box2:
                response = 2
            elif clicked_box == box3:
                response = 3
            
            # Check if the response is correct
            correct = (response == correctResp)
               
            # Check if a response has been recorded
            if response !=0:
                print("Response:", response)
            
            # *next_quest* updates
            waitOnFlip = False
            
            # if next_quest is starting this frame...
            if next_quest.status == NOT_STARTED and response>0:
                # keep track of start time/frame for later
                next_quest.frameNStart = frameN  # exact frame index
                next_quest.tStart = t  # local t and not account for scr refresh
                next_quest.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(next_quest, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'next_quest.started')
                # update status
                next_quest.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(next_quest.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(next_quest.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if next_quest.status == STARTED and not waitOnFlip:
                theseKeys = next_quest.getKeys(keyList=['return'], waitRelease=False)
                _next_quest_allKeys.extend(theseKeys)
                if len(_next_quest_allKeys):
                    next_quest.keys = [key.name for key in _next_quest_allKeys]  # storing all keys
                    next_quest.rt = [key.rt for key in _next_quest_allKeys]
                    next_quest.duration = [key.duration for key in _next_quest_allKeys]
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
            for thisComponent in instr_quizComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instr_quiz" ---
        for thisComponent in instr_quizComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for instructionquiz (TrialHandler)
        instructionquiz.addData('mouse.x', mouse.x)
        instructionquiz.addData('mouse.y', mouse.y)
        instructionquiz.addData('mouse.leftButton', mouse.leftButton)
        instructionquiz.addData('mouse.midButton', mouse.midButton)
        instructionquiz.addData('mouse.rightButton', mouse.rightButton)
        instructionquiz.addData('mouse.time', mouse.time)
        instructionquiz.addData('mouse.clicked_name', mouse.clicked_name)
        # Run 'End Routine' code from code
        if correct: #update score
            quiz_score = quiz_score+1
        
        instructionquiz.addData('correct', correct)
        instructionquiz.addData('response', response)
        instructionquiz.addData('quiz_score', quiz_score)
        
        if instructionquiz.thisN == 3 and quiz_score < 3:
            instructionquiz.finished = True
            instructionquiz_rep.finished = False
        elif instructionquiz.thisN == 3 and quiz_score == 3:
            instructionquiz.finished = True
            instructionquiz_rep.finished = True
        # check responses
        if next_quest.keys in ['', [], None]:  # No response was made
            next_quest.keys = None
        instructionquiz.addData('next_quest.keys',next_quest.keys)
        if next_quest.keys != None:  # we had a response
            instructionquiz.addData('next_quest.rt', next_quest.rt)
            instructionquiz.addData('next_quest.duration', next_quest.duration)
        # the Routine "instr_quiz" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'instructionquiz'
    
    
    # --- Prepare to start Routine "check" ---
    continueRoutine = True
    # update component parameters for each repeat
    FeedbackQuiz2.setText("Exceptional work, future astronaut! Your answers were all spot-on.\n\nLet's continue to the main game.")
    FeedbackQuiz1.setText("Great effort, future astronaut! Some of your answers were unfortunately incorrect.\n\nLet's give it another try and help those astronaut skills find their orbit! ")
    image_rocket.setImage(stimFile)
    # keep track of which components have finished
    checkComponents = [FeedbackQuiz2, FeedbackQuiz1, image_rocket]
    for thisComponent in checkComponents:
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
    
    # --- Run Routine "check" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *FeedbackQuiz2* updates
        
        # if FeedbackQuiz2 is starting this frame...
        if FeedbackQuiz2.status == NOT_STARTED and correct:
            # keep track of start time/frame for later
            FeedbackQuiz2.frameNStart = frameN  # exact frame index
            FeedbackQuiz2.tStart = t  # local t and not account for scr refresh
            FeedbackQuiz2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FeedbackQuiz2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'FeedbackQuiz2.started')
            # update status
            FeedbackQuiz2.status = STARTED
            FeedbackQuiz2.setAutoDraw(True)
        
        # if FeedbackQuiz2 is active this frame...
        if FeedbackQuiz2.status == STARTED:
            # update params
            pass
        
        # if FeedbackQuiz2 is stopping this frame...
        if FeedbackQuiz2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FeedbackQuiz2.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                FeedbackQuiz2.tStop = t  # not accounting for scr refresh
                FeedbackQuiz2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'FeedbackQuiz2.stopped')
                # update status
                FeedbackQuiz2.status = FINISHED
                FeedbackQuiz2.setAutoDraw(False)
        
        # *FeedbackQuiz1* updates
        
        # if FeedbackQuiz1 is starting this frame...
        if FeedbackQuiz1.status == NOT_STARTED and correct:
            # keep track of start time/frame for later
            FeedbackQuiz1.frameNStart = frameN  # exact frame index
            FeedbackQuiz1.tStart = t  # local t and not account for scr refresh
            FeedbackQuiz1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FeedbackQuiz1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'FeedbackQuiz1.started')
            # update status
            FeedbackQuiz1.status = STARTED
            FeedbackQuiz1.setAutoDraw(True)
        
        # if FeedbackQuiz1 is active this frame...
        if FeedbackQuiz1.status == STARTED:
            # update params
            pass
        
        # if FeedbackQuiz1 is stopping this frame...
        if FeedbackQuiz1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FeedbackQuiz1.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                FeedbackQuiz1.tStop = t  # not accounting for scr refresh
                FeedbackQuiz1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'FeedbackQuiz1.stopped')
                # update status
                FeedbackQuiz1.status = FINISHED
                FeedbackQuiz1.setAutoDraw(False)
        
        # *image_rocket* updates
        
        # if image_rocket is starting this frame...
        if image_rocket.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_rocket.frameNStart = frameN  # exact frame index
            image_rocket.tStart = t  # local t and not account for scr refresh
            image_rocket.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rocket, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rocket.started')
            # update status
            image_rocket.status = STARTED
            image_rocket.setAutoDraw(True)
        
        # if image_rocket is active this frame...
        if image_rocket.status == STARTED:
            # update params
            pass
        
        # if image_rocket is stopping this frame...
        if image_rocket.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rocket.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                image_rocket.tStop = t  # not accounting for scr refresh
                image_rocket.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rocket.stopped')
                # update status
                image_rocket.status = FINISHED
                image_rocket.setAutoDraw(False)
        
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
        for thisComponent in checkComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "check" ---
    for thisComponent in checkComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3.0 repeats of 'instructionquiz_rep'


# set up handler to look after randomisation of conditions etc
maintask = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('trialTypes.xlsx'),
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
    reward_ratingComponents = [reward, text_rewardRating, text_rewardRating_2, login_reward, coins_little_2, coins_many_2, photodiode_r1]
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
        
        # *photodiode_r1* updates
        
        # if photodiode_r1 is starting this frame...
        if photodiode_r1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_r1.frameNStart = frameN  # exact frame index
            photodiode_r1.tStart = t  # local t and not account for scr refresh
            photodiode_r1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_r1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_r1.started')
            # update status
            photodiode_r1.status = STARTED
            photodiode_r1.setAutoDraw(True)
        
        # if photodiode_r1 is active this frame...
        if photodiode_r1.status == STARTED:
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
    # Run 'End Routine' code from get_rating_2
    rewscale_value = reward.getRating()
    reward_ratings.append(rewscale_value)
    # the Routine "reward_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cross" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    crossComponents = [text2_2, photodiode_fix1]
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
        
        # *photodiode_fix1* updates
        
        # if photodiode_fix1 is starting this frame...
        if photodiode_fix1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_fix1.frameNStart = frameN  # exact frame index
            photodiode_fix1.tStart = t  # local t and not account for scr refresh
            photodiode_fix1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_fix1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_fix1.started')
            # update status
            photodiode_fix1.status = STARTED
            photodiode_fix1.setAutoDraw(True)
        
        # if photodiode_fix1 is active this frame...
        if photodiode_fix1.status == STARTED:
            # update params
            pass
        
        # if photodiode_fix1 is stopping this frame...
        if photodiode_fix1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > photodiode_fix1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                photodiode_fix1.tStop = t  # not accounting for scr refresh
                photodiode_fix1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'photodiode_fix1.stopped')
                # update status
                photodiode_fix1.status = FINISHED
                photodiode_fix1.setAutoDraw(False)
        
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
    
    # --- Prepare to start Routine "effort_rating" ---
    continueRoutine = True
    # update component parameters for each repeat
    effort.reset()
    effort_reward_2.keys = []
    effort_reward_2.rt = []
    _effort_reward_2_allKeys = []
    fuel_empty.setImage('fuelShipWhite.png')
    # keep track of which components have finished
    effort_ratingComponents = [effort, text_effortRating_3, text_effortRating_4, effort_reward_2, fuel_empty, fuel_full, photodiode_r1_2]
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
        
        # *fuel_empty* updates
        
        # if fuel_empty is starting this frame...
        if fuel_empty.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fuel_empty.frameNStart = frameN  # exact frame index
            fuel_empty.tStart = t  # local t and not account for scr refresh
            fuel_empty.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fuel_empty, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fuel_empty.started')
            # update status
            fuel_empty.status = STARTED
            fuel_empty.setAutoDraw(True)
        
        # if fuel_empty is active this frame...
        if fuel_empty.status == STARTED:
            # update params
            pass
        
        # *fuel_full* updates
        
        # if fuel_full is starting this frame...
        if fuel_full.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fuel_full.frameNStart = frameN  # exact frame index
            fuel_full.tStart = t  # local t and not account for scr refresh
            fuel_full.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fuel_full, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fuel_full.started')
            # update status
            fuel_full.status = STARTED
            fuel_full.setAutoDraw(True)
        
        # if fuel_full is active this frame...
        if fuel_full.status == STARTED:
            # update params
            pass
        
        # *photodiode_r1_2* updates
        
        # if photodiode_r1_2 is starting this frame...
        if photodiode_r1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_r1_2.frameNStart = frameN  # exact frame index
            photodiode_r1_2.tStart = t  # local t and not account for scr refresh
            photodiode_r1_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_r1_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_r1_2.started')
            # update status
            photodiode_r1_2.status = STARTED
            photodiode_r1_2.setAutoDraw(True)
        
        # if photodiode_r1_2 is active this frame...
        if photodiode_r1_2.status == STARTED:
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
    # Run 'End Routine' code from get_rating
    effscale_value = effort.getRating()
    effort_ratings.append(effscale_value)
    # the Routine "effort_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cross" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    crossComponents = [text2_2, photodiode_fix1]
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
        
        # *photodiode_fix1* updates
        
        # if photodiode_fix1 is starting this frame...
        if photodiode_fix1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_fix1.frameNStart = frameN  # exact frame index
            photodiode_fix1.tStart = t  # local t and not account for scr refresh
            photodiode_fix1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_fix1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_fix1.started')
            # update status
            photodiode_fix1.status = STARTED
            photodiode_fix1.setAutoDraw(True)
        
        # if photodiode_fix1 is active this frame...
        if photodiode_fix1.status == STARTED:
            # update params
            pass
        
        # if photodiode_fix1 is stopping this frame...
        if photodiode_fix1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > photodiode_fix1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                photodiode_fix1.tStop = t  # not accounting for scr refresh
                photodiode_fix1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'photodiode_fix1.stopped')
                # update status
                photodiode_fix1.status = FINISHED
                photodiode_fix1.setAutoDraw(False)
        
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
    winE = rscore+1
    npumps = 0
    maxPumps = effLevel
    key_sequence = [] # List to store the key sequence ('z' followed by 'p')
    achieved = 0
    
    if maintask.thisN == 0:
        if max_press_pSec_pract == 0:
            max_press_pSec = 4
        else:
            max_press_pSec = round(max_press_pSec_pract)  # Round to the nearest integer
        npumps_pSec = [0]
    
    # Run 'Begin Routine' code from barSize
    #balloon image's starting size
    batterySize=0.00
    achieved=False
    nPumps=0
    batterySizeIncr = batteryMaxSize/(max_press_pSec*timeAvailable)
    
    # Run 'Begin Routine' code from countdownEasy
    if not countdownStarted:
        countdownClock = core.CountdownTimer(timeAvailable)
        countdownStarted = True
    # keep track of which components have finished
    main_trialComponents = [text_6, tank, background, barBody, photodiode_mt1]
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
        # Check for key presses
        keys = event.getKeys()
        
        if keys:
            key_pressed = keys[0]
        
            # Check if the key pressed is 'z' and it's the first key in the sequence
            if key_pressed == 'z' and not key_sequence:
                key_sequence.append(key_pressed)
                
            # Check if the key pressed is 'p' and 'z' was pressed before it
            elif key_pressed == 'p' and 'z' in key_sequence:
                key_sequence.append(key_pressed)
                
            # If the sequence is complete ('z' followed by 'p'), increase the size of the shape
            if key_sequence == ['z', 'p']:
                npumps += 1
                key_sequence = []  # Reset the key sequence
        
        
        # Run 'Each Frame' code from barSize
        batterySize=npumps*batterySizeIncr
        # Run 'Each Frame' code from countdownEasy
        timeRemaining = countdownClock.getTime()
        
        if timeRemaining <= 0.0:
            continueRoutine = False # end this trial immediately
            countdownStarted = False
        
        # *tank* updates
        
        # if tank is starting this frame...
        if tank.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            tank.frameNStart = frameN  # exact frame index
            tank.tStart = t  # local t and not account for scr refresh
            tank.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tank, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'tank.started')
            # update status
            tank.status = STARTED
            tank.setAutoDraw(True)
        
        # if tank is active this frame...
        if tank.status == STARTED:
            # update params
            pass
        
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
            barBody.setPos([0, -0.5], log=False)
            barBody.setSize([.15, batterySize], log=False)
        
        # *photodiode_mt1* updates
        
        # if photodiode_mt1 is starting this frame...
        if photodiode_mt1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_mt1.frameNStart = frameN  # exact frame index
            photodiode_mt1.tStart = t  # local t and not account for scr refresh
            photodiode_mt1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_mt1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_mt1.started')
            # update status
            photodiode_mt1.status = STARTED
            photodiode_mt1.setAutoDraw(True)
        
        # if photodiode_mt1 is active this frame...
        if photodiode_mt1.status == STARTED:
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
    # Check if the desired number of pumps has been reached
    if (npumps / max_press_pSec) * 100 >= maxPumps:
        achieved = True
        rscore += 1
    
    # Add current round score to the total score
    tscore += rscore
    
    npumps_pSec.append(npumps / t)
    
    print(max_press_pSec)
    print(npumps_pSec[-1])
    
    if max_press_pSec < npumps_pSec[-1]:
        max_press_pSec = npumps_pSec[-1]
        print('new max:', max_press_pSec)  # Added a comma to separate the string and variable
    
    # Save data
    maintask.addData('threshold', effTresh)  # Corrected 'treshold' to 'threshold'
    maintask.addData('npumps_pSec', npumps_pSec)
    maintask.addData('trial_duration', t)
    maintask.addData('# of presses', npumps)
    maintask.addData('trial score', rscore)
    maintask.addData('achieved', achieved)
    
    # Run 'End Routine' code from countdownEasy
    countdownStarted = False
    # the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cross" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    crossComponents = [text2_2, photodiode_fix1]
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
        
        # *photodiode_fix1* updates
        
        # if photodiode_fix1 is starting this frame...
        if photodiode_fix1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_fix1.frameNStart = frameN  # exact frame index
            photodiode_fix1.tStart = t  # local t and not account for scr refresh
            photodiode_fix1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_fix1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_fix1.started')
            # update status
            photodiode_fix1.status = STARTED
            photodiode_fix1.setAutoDraw(True)
        
        # if photodiode_fix1 is active this frame...
        if photodiode_fix1.status == STARTED:
            # update params
            pass
        
        # if photodiode_fix1 is stopping this frame...
        if photodiode_fix1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > photodiode_fix1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                photodiode_fix1.tStop = t  # not accounting for scr refresh
                photodiode_fix1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'photodiode_fix1.stopped')
                # update status
                photodiode_fix1.status = FINISHED
                photodiode_fix1.setAutoDraw(False)
        
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
    
    # --- Prepare to start Routine "Feedback_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from checkAchieved
    if achieved==True:
        feedbackText=FeedbackText1
        crashShow=0
    else:
        feedbackText= FeedbackText2
        crashShow=1
    feedbackMsg.setText(feedbackText)
    image_rubies.setImage(stimFile)
    # keep track of which components have finished
    Feedback_2Components = [feedbackMsg, image_rubies, photodiode_ft1]
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
    while continueRoutine:
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
            if tThisFlipGlobal > feedbackMsg.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                feedbackMsg.tStop = t  # not accounting for scr refresh
                feedbackMsg.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedbackMsg.stopped')
                # update status
                feedbackMsg.status = FINISHED
                feedbackMsg.setAutoDraw(False)
        
        # *image_rubies* updates
        
        # if image_rubies is starting this frame...
        if image_rubies.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_rubies.frameNStart = frameN  # exact frame index
            image_rubies.tStart = t  # local t and not account for scr refresh
            image_rubies.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_rubies, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_rubies.started')
            # update status
            image_rubies.status = STARTED
            image_rubies.setAutoDraw(True)
        
        # if image_rubies is active this frame...
        if image_rubies.status == STARTED:
            # update params
            pass
        
        # if image_rubies is stopping this frame...
        if image_rubies.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_rubies.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                image_rubies.tStop = t  # not accounting for scr refresh
                image_rubies.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_rubies.stopped')
                # update status
                image_rubies.status = FINISHED
                image_rubies.setAutoDraw(False)
        
        # *photodiode_ft1* updates
        
        # if photodiode_ft1 is starting this frame...
        if photodiode_ft1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            photodiode_ft1.frameNStart = frameN  # exact frame index
            photodiode_ft1.tStart = t  # local t and not account for scr refresh
            photodiode_ft1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(photodiode_ft1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'photodiode_ft1.started')
            # update status
            photodiode_ft1.status = STARTED
            photodiode_ft1.setAutoDraw(True)
        
        # if photodiode_ft1 is active this frame...
        if photodiode_ft1.status == STARTED:
            # update params
            pass
        
        # if photodiode_ft1 is stopping this frame...
        if photodiode_ft1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > photodiode_ft1.tStartRefresh + feedbackTime-frameTolerance:
                # keep track of stop time/frame for later
                photodiode_ft1.tStop = t  # not accounting for scr refresh
                photodiode_ft1.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'photodiode_ft1.stopped')
                # update status
                photodiode_ft1.status = FINISHED
                photodiode_ft1.setAutoDraw(False)
        
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
    # the Routine "Feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'maintask'


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
