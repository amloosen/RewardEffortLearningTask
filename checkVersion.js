/********************* 
 * Checkversion Test *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'checkVersion';  // from the Builder filename that created this script
let expInfo = {
    'Handedness': 'r/l',
    'participant': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([(- 1.0), (- 1.0), 0.0902]),
  units: 'norm',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(end_videoRoutineBegin());
flowScheduler.add(end_videoRoutineEachFrame());
flowScheduler.add(end_videoRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'blockTypes.csv', 'path': 'blockTypes.csv'},
    {'name': 'trialTypes1.csv', 'path': 'trialTypes1.csv'},
    {'name': 'stim/image3.png', 'path': 'stim/image3.png'},
    {'name': 'stim/image4.png', 'path': 'stim/image4.png'},
    {'name': 'stim/image6.png', 'path': 'stim/image6.png'},
    {'name': 'stim/image5.png', 'path': 'stim/image5.png'},
    {'name': 'stim/image2.png', 'path': 'stim/image2.png'},
    {'name': 'stim/image7.png', 'path': 'stim/image7.png'},
    {'name': 'trialTypes2.csv', 'path': 'trialTypes2.csv'},
    {'name': 'stim/image1.png', 'path': 'stim/image1.png'},
    {'name': 'stim/image1.png', 'path': 'stim/image1.png'},
    {'name': 'stim/image7.png', 'path': 'stim/image7.png'},
    {'name': 'stim/fuelShipWhite.png', 'path': 'stim/fuelShipWhite.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stim/fuelShipFull-01.png', 'path': 'stim/fuelShipFull-01.png'},
    {'name': 'stim/TankOnlyEmpt-01.png', 'path': 'stim/TankOnlyEmpt-01.png'},
    {'name': 'stim/BlockEnd.png', 'path': 'stim/BlockEnd.png'},
    {'name': 'stim/EndStudyGeneral.mp4', 'path': 'stim/EndStudyGeneral.mp4'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "reward_rating"
  reward_ratingClock = new util.Clock();
  reward = new visual.Slider({
    win: psychoJS.window, name: 'reward',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.1, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 0.6314, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_rewardRating = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rewardRating',
    text: 'How many gold rubies do you expect on the next planet?\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_rewardRating_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rewardRating_2',
    text: 'Click on the scale to indicate your rating and press ENTER to log it in.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  login_reward = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  coins_little_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coins_little_2', units : undefined, 
    image : 'stim/image1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.6), (- 0.4)], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  coins_many_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coins_many_2', units : undefined, 
    image : 'stim/image7.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.7, (- 0.35)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Run 'Begin Experiment' code from get_rating_2
  reward_ratings = [];
  
  photodiode_r1 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_r1', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "cross"
  crossClock = new util.Clock();
  text2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  photodiode_fix1 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_fix1', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "effort_rating"
  effort_ratingClock = new util.Clock();
  effort = new visual.Slider({
    win: psychoJS.window, name: 'effort',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.1, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 0.6314, (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_effortRating_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_effortRating_3',
    text: 'How much fuel do you think you will need to get to the next planet?\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_effortRating_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_effortRating_4',
    text: 'Click on the scale to indicate your rating and press ENTER to log it in.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  effort_reward_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fuel_empty = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fuel_empty', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.7), (- 0.3)], size : [0.2, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  fuel_full = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fuel_full', units : undefined, 
    image : 'stim/fuelShipFull-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.7, (- 0.3)], size : [0.34, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Run 'Begin Experiment' code from get_rating
  effort_ratings = [];
  
  photodiode_r1_2 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_r1_2', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "main_trial"
  main_trialClock = new util.Clock();
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from computeEffort
  nincr_pSec = [0];
  tankSize = 0;
  tankMaxSize = 0.55;
  timer_main = null;
  time_available = null;
  mainCounter = (- 1);
  
  tank = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tank', units : undefined, 
    image : 'stim/TankOnlyEmpt-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.5, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  background = new visual.Rect ({
    win: psychoJS.window, name: 'background', 
    width: [0.15, tankMaxSize][0], height: [0.15, tankMaxSize][1],
    ori: 0, pos: [0, (- 0.5)],
    anchor: 'bottom-center',
    lineWidth: 2, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  barBody = new visual.Rect ({
    win: psychoJS.window, name: 'barBody', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    anchor: 'bottom-center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color("'#2b773e'"),
    fillColor: new util.Color("'#2b773e'"),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  photodiode_mt1 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_mt1', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "main_feedback"
  main_feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from checkAchieved
  feedbackText = "";
  feedbackTime = 3;
  
  feedbackMsg = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackMsg',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image_rubies = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_rubies', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.4)], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  Xout = new visual.TextStim({
    win: psychoJS.window,
    name: 'Xout',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -3.0 
  });
  
  photodiode_ft1 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_ft1', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  // Run 'Begin Experiment' code from block_break_control
  blockCounter = (- 1);
  breakTime = 15;
  
  break_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'break_img', units : undefined, 
    image : 'stim/BlockEnd.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  end_break = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_video"
  end_videoClock = new util.Clock();
  video_endmainClock = new util.Clock();
  video_endmain = new visual.MovieStim({
    win: psychoJS.window,
    name: 'video_endmain',
    units: psychoJS.window.units,
    movie: 'stim/EndStudyGeneral.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2, 2],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  end_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blockTypes.csv',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(block_breakRoutineBegin(snapshot));
      blocksLoopScheduler.add(block_breakRoutineEachFrame());
      blocksLoopScheduler.add(block_breakRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(reward_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(reward_ratingRoutineEachFrame());
      trialsLoopScheduler.add(reward_ratingRoutineEnd(snapshot));
      trialsLoopScheduler.add(crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(crossRoutineEachFrame());
      trialsLoopScheduler.add(crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(effort_ratingRoutineBegin(snapshot));
      trialsLoopScheduler.add(effort_ratingRoutineEachFrame());
      trialsLoopScheduler.add(effort_ratingRoutineEnd(snapshot));
      trialsLoopScheduler.add(crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(crossRoutineEachFrame());
      trialsLoopScheduler.add(crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(main_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(main_trialRoutineEachFrame());
      trialsLoopScheduler.add(main_trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(crossRoutineEachFrame());
      trialsLoopScheduler.add(crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(main_feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(main_feedbackRoutineEachFrame());
      trialsLoopScheduler.add(main_feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(crossRoutineEachFrame());
      trialsLoopScheduler.add(crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function reward_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_rating' ---
    t = 0;
    reward_ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    reward.reset()
    login_reward.keys = undefined;
    login_reward.rt = undefined;
    _login_reward_allKeys = [];
    // keep track of which components have finished
    reward_ratingComponents = [];
    reward_ratingComponents.push(reward);
    reward_ratingComponents.push(text_rewardRating);
    reward_ratingComponents.push(text_rewardRating_2);
    reward_ratingComponents.push(login_reward);
    reward_ratingComponents.push(coins_little_2);
    reward_ratingComponents.push(coins_many_2);
    reward_ratingComponents.push(photodiode_r1);
    
    for (const thisComponent of reward_ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function reward_ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_rating' ---
    // get current time
    t = reward_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reward* updates
    if (frameN >= 1 && reward.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward.tStart = t;  // (not accounting for frame time here)
      reward.frameNStart = frameN;  // exact frame index
      
      reward.setAutoDraw(true);
    }

    
    // *text_rewardRating* updates
    if (t >= 0.0 && text_rewardRating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rewardRating.tStart = t;  // (not accounting for frame time here)
      text_rewardRating.frameNStart = frameN;  // exact frame index
      
      text_rewardRating.setAutoDraw(true);
    }

    
    // *text_rewardRating_2* updates
    if (t >= 0.0 && text_rewardRating_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rewardRating_2.tStart = t;  // (not accounting for frame time here)
      text_rewardRating_2.frameNStart = frameN;  // exact frame index
      
      text_rewardRating_2.setAutoDraw(true);
    }

    
    // *login_reward* updates
    if ((reward.rating) && login_reward.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      login_reward.tStart = t;  // (not accounting for frame time here)
      login_reward.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { login_reward.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { login_reward.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { login_reward.clearEvents(); });
    }

    if (login_reward.status === PsychoJS.Status.STARTED) {
      let theseKeys = login_reward.getKeys({keyList: ['return'], waitRelease: false});
      _login_reward_allKeys = _login_reward_allKeys.concat(theseKeys);
      if (_login_reward_allKeys.length > 0) {
        login_reward.keys = _login_reward_allKeys.map((key) => key.name);  // storing all keys
        login_reward.rt = _login_reward_allKeys.map((key) => key.rt);
        login_reward.duration = _login_reward_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *coins_little_2* updates
    if (t >= 0.0 && coins_little_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coins_little_2.tStart = t;  // (not accounting for frame time here)
      coins_little_2.frameNStart = frameN;  // exact frame index
      
      coins_little_2.setAutoDraw(true);
    }

    
    // *coins_many_2* updates
    if (t >= 0.0 && coins_many_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coins_many_2.tStart = t;  // (not accounting for frame time here)
      coins_many_2.frameNStart = frameN;  // exact frame index
      
      coins_many_2.setAutoDraw(true);
    }

    
    // *photodiode_r1* updates
    if (t >= 0.0 && photodiode_r1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_r1.tStart = t;  // (not accounting for frame time here)
      photodiode_r1.frameNStart = frameN;  // exact frame index
      
      photodiode_r1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reward_ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reward_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_rating' ---
    for (const thisComponent of reward_ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reward.response', reward.getRating());
    psychoJS.experiment.addData('reward.rt', reward.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(login_reward.corr, level);
    }
    psychoJS.experiment.addData('login_reward.keys', login_reward.keys);
    if (typeof login_reward.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('login_reward.rt', login_reward.rt);
        psychoJS.experiment.addData('login_reward.duration', login_reward.duration);
        routineTimer.reset();
        }
    
    login_reward.stop();
    // Run 'End Routine' code from get_rating_2
    rewscale_value = reward.getRating();
    reward_ratings.push(rewscale_value);
    trials.addData("rewRating", rewscale_value);
    
    // the Routine "reward_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cross' ---
    t = 0;
    crossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    crossComponents = [];
    crossComponents.push(text2_2);
    crossComponents.push(photodiode_fix1);
    
    for (const thisComponent of crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cross' ---
    // get current time
    t = crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text2_2* updates
    if (t >= 0.0 && text2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2_2.tStart = t;  // (not accounting for frame time here)
      text2_2.frameNStart = frameN;  // exact frame index
      
      text2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text2_2.setAutoDraw(false);
    }
    
    // *photodiode_fix1* updates
    if (t >= 0.0 && photodiode_fix1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_fix1.tStart = t;  // (not accounting for frame time here)
      photodiode_fix1.frameNStart = frameN;  // exact frame index
      
      photodiode_fix1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (photodiode_fix1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      photodiode_fix1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cross' ---
    for (const thisComponent of crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function effort_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'effort_rating' ---
    t = 0;
    effort_ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    effort.reset()
    effort_reward_2.keys = undefined;
    effort_reward_2.rt = undefined;
    _effort_reward_2_allKeys = [];
    fuel_empty.setImage('stim/fuelShipWhite.png');
    // keep track of which components have finished
    effort_ratingComponents = [];
    effort_ratingComponents.push(effort);
    effort_ratingComponents.push(text_effortRating_3);
    effort_ratingComponents.push(text_effortRating_4);
    effort_ratingComponents.push(effort_reward_2);
    effort_ratingComponents.push(fuel_empty);
    effort_ratingComponents.push(fuel_full);
    effort_ratingComponents.push(photodiode_r1_2);
    
    for (const thisComponent of effort_ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function effort_ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'effort_rating' ---
    // get current time
    t = effort_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *effort* updates
    if (frameN >= 1 && effort.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort.tStart = t;  // (not accounting for frame time here)
      effort.frameNStart = frameN;  // exact frame index
      
      effort.setAutoDraw(true);
    }

    
    // *text_effortRating_3* updates
    if (t >= 0.0 && text_effortRating_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_effortRating_3.tStart = t;  // (not accounting for frame time here)
      text_effortRating_3.frameNStart = frameN;  // exact frame index
      
      text_effortRating_3.setAutoDraw(true);
    }

    
    // *text_effortRating_4* updates
    if (t >= 0.0 && text_effortRating_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_effortRating_4.tStart = t;  // (not accounting for frame time here)
      text_effortRating_4.frameNStart = frameN;  // exact frame index
      
      text_effortRating_4.setAutoDraw(true);
    }

    
    // *effort_reward_2* updates
    if ((effort.rating) && effort_reward_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      effort_reward_2.tStart = t;  // (not accounting for frame time here)
      effort_reward_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { effort_reward_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { effort_reward_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { effort_reward_2.clearEvents(); });
    }

    if (effort_reward_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = effort_reward_2.getKeys({keyList: ['return'], waitRelease: false});
      _effort_reward_2_allKeys = _effort_reward_2_allKeys.concat(theseKeys);
      if (_effort_reward_2_allKeys.length > 0) {
        effort_reward_2.keys = _effort_reward_2_allKeys.map((key) => key.name);  // storing all keys
        effort_reward_2.rt = _effort_reward_2_allKeys.map((key) => key.rt);
        effort_reward_2.duration = _effort_reward_2_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fuel_empty* updates
    if (t >= 0.0 && fuel_empty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fuel_empty.tStart = t;  // (not accounting for frame time here)
      fuel_empty.frameNStart = frameN;  // exact frame index
      
      fuel_empty.setAutoDraw(true);
    }

    
    // *fuel_full* updates
    if (t >= 0.0 && fuel_full.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fuel_full.tStart = t;  // (not accounting for frame time here)
      fuel_full.frameNStart = frameN;  // exact frame index
      
      fuel_full.setAutoDraw(true);
    }

    
    // *photodiode_r1_2* updates
    if (t >= 0.0 && photodiode_r1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_r1_2.tStart = t;  // (not accounting for frame time here)
      photodiode_r1_2.frameNStart = frameN;  // exact frame index
      
      photodiode_r1_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of effort_ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function effort_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'effort_rating' ---
    for (const thisComponent of effort_ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('effort.response', effort.getRating());
    psychoJS.experiment.addData('effort.rt', effort.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(effort_reward_2.corr, level);
    }
    psychoJS.experiment.addData('effort_reward_2.keys', effort_reward_2.keys);
    if (typeof effort_reward_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('effort_reward_2.rt', effort_reward_2.rt);
        psychoJS.experiment.addData('effort_reward_2.duration', effort_reward_2.duration);
        routineTimer.reset();
        }
    
    effort_reward_2.stop();
    // Run 'End Routine' code from get_rating
    effscale_value = effort.getRating();
    effort_ratings.push(effscale_value);
    trials.addData("effRating", effLevel);
    
    // the Routine "effort_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial' ---
    t = 0;
    main_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trial_text.setText('Power up!\n');
    // Run 'Begin Routine' code from computeEffort
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    mainCounter += 1;
    nincr = 0;
    key_sequence = [];
    achieved = 0;
    firstIncr = false;
    tankSize = 0;
    if ((mainCounter === 0)) {
        if (((! _pj.in_es6("max_incr_pSec_pract", locals())) || (max_incr_pSec_pract === 0))) {
            max_incr_pSec = 11;
        } else {
            max_incr_pSec = (util.round(max_incr_pSec_pract) + 1);
        }
        if ((max_incr_pSec < 1)) {
            max_incr_pSec = 1;
        }
        if ((! _pj.in_es6("time_available_pract", locals()))) {
            timeAvailable = 5;
        } else {
            timeAvailable = time_available_pract;
        }
        if ((! _pj.in_es6("time_available_pract", locals()))) {
            time_available_main = 5;
        } else {
            time_available_main = time_available_pract;
        }
    }
    tankSizeIncr = (tankMaxSize / (max_incr_pSec * timeAvailable));
    
    // keep track of which components have finished
    main_trialComponents = [];
    main_trialComponents.push(trial_text);
    main_trialComponents.push(tank);
    main_trialComponents.push(background);
    main_trialComponents.push(barBody);
    main_trialComponents.push(photodiode_mt1);
    
    for (const thisComponent of main_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function main_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial' ---
    // get current time
    t = main_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_text* updates
    if (t >= 0.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    // Run 'Each Frame' code from computeEffort
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    z_pressed = false;
    keys = psychoJS.eventManager.getKeys();
    if ((! keys)) {
        continueRoutine = true;
    } else {
        key_pressed = keys[0];
        if (((key_pressed === "z") && (! key_sequence))) {
            key_sequence.push(key_pressed);
            if ((! z_pressed)) {
                z_pressed = true;
                timer_main = new core.CountdownTimer(time_available_main);
            }
        } else {
            if (((key_pressed === "p") && _pj.in_es6("z", key_sequence))) {
                key_sequence.push(key_pressed);
            }
        }
        if ((key_sequence === ["z", "p"])) {
            nincr += 1;
            key_sequence = [];
        }
    }
    if (((timer_main !== null) && (timer_main.getTime() <= 0))) {
        continueRoutine = false;
    }
    tankSize = (nincr * tankSizeIncr);
    if ((tankSize > tankMaxSize)) {
        tankSize = tankMaxSize;
        continueRoutine = false;
    } else {
        if ((tankSize === tankMaxSize)) {
            continueRoutine = false;
        }
    }
    
    
    // *tank* updates
    if (t >= 0 && tank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tank.tStart = t;  // (not accounting for frame time here)
      tank.frameNStart = frameN;  // exact frame index
      
      tank.setAutoDraw(true);
    }

    
    // *background* updates
    if (t >= 0.0 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }

    
    // *barBody* updates
    if (t >= 0.0 && barBody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      barBody.tStart = t;  // (not accounting for frame time here)
      barBody.frameNStart = frameN;  // exact frame index
      
      barBody.setAutoDraw(true);
    }

    
    if (barBody.status === PsychoJS.Status.STARTED){ // only update if being drawn
      barBody.setPos([0, (- 0.5)], false);
      barBody.setSize([0.15, tankSize], false);
    }
    
    // *photodiode_mt1* updates
    if (t >= 0.0 && photodiode_mt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_mt1.tStart = t;  // (not accounting for frame time here)
      photodiode_mt1.frameNStart = frameN;  // exact frame index
      
      photodiode_mt1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial' ---
    for (const thisComponent of main_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from computeEffort
    est_incr_ptrial = (max_incr_pSec * time_available_main);
    incr_shouldDo = ((effLevel / 100) * est_incr_ptrial);
    if ((nincr >= util.round(incr_shouldDo))) {
        achieved = true;
    }
    if ((max_incr_pSec < ((nincr / t) + 1))) {
        max_incr_pSec = ((nincr / t) + 1);
    }
    nincr_pSec.push((nincr / t));
    timer_main = null;
    trials.addData("effLevel", effLevel);
    trials.addData("points", Points);
    trials.addData("nincr_pSec", nincr_pSec);
    trials.addData("trial_duration", t);
    trials.addData("nr_of_incr", nincr);
    trials.addData("achieved", achieved);
    trials.addData("est_incr_ptrial", est_incr_ptrial);
    trials.addData("max_incr_pSec", max_incr_pSec);
    trials.addData("incr_shouldDo", incr_shouldDo);
    
    // the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_feedback' ---
    t = 0;
    main_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkAchieved
    if ((achieved === true)) {
        feedbackText = FeedbackText1;
        crossOut = "";
    } else {
        feedbackText = FeedbackText2;
        Xout.text = "X";
    }
    
    feedbackMsg.setText(feedbackText);
    image_rubies.setImage(stimFile);
    // keep track of which components have finished
    main_feedbackComponents = [];
    main_feedbackComponents.push(feedbackMsg);
    main_feedbackComponents.push(image_rubies);
    main_feedbackComponents.push(Xout);
    main_feedbackComponents.push(photodiode_ft1);
    
    for (const thisComponent of main_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function main_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_feedback' ---
    // get current time
    t = main_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackMsg* updates
    if (t >= 0.0 && feedbackMsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackMsg.tStart = t;  // (not accounting for frame time here)
      feedbackMsg.frameNStart = frameN;  // exact frame index
      
      feedbackMsg.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedbackMsg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackMsg.setAutoDraw(false);
    }
    
    // *image_rubies* updates
    if (t >= 0.0 && image_rubies.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_rubies.tStart = t;  // (not accounting for frame time here)
      image_rubies.frameNStart = frameN;  // exact frame index
      
      image_rubies.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_rubies.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_rubies.setAutoDraw(false);
    }
    
    // *Xout* updates
    if (t >= 0 && Xout.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Xout.tStart = t;  // (not accounting for frame time here)
      Xout.frameNStart = frameN;  // exact frame index
      
      Xout.setAutoDraw(true);
    }

    frameRemains = 0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Xout.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Xout.setAutoDraw(false);
    }
    
    // *photodiode_ft1* updates
    if (t >= 0.0 && photodiode_ft1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_ft1.tStart = t;  // (not accounting for frame time here)
      photodiode_ft1.frameNStart = frameN;  // exact frame index
      
      photodiode_ft1.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (photodiode_ft1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      photodiode_ft1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_feedback' ---
    for (const thisComponent of main_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "main_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function block_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_break' ---
    t = 0;
    block_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from block_break_control
    blockCounter += 1;
    if ((blockCounter === (nrBlocks - 1))) {
        continueRoutine = false;
    } else {
        startTimeBreak = globalClock.getTime();
    }
    
    end_break.keys = undefined;
    end_break.rt = undefined;
    _end_break_allKeys = [];
    // keep track of which components have finished
    block_breakComponents = [];
    block_breakComponents.push(break_img);
    block_breakComponents.push(end_break);
    
    for (const thisComponent of block_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function block_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_break' ---
    // get current time
    t = block_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from block_break_control
    if (((globalClock.getTime() - startTimeBreak) >= breakTime)) {
        continueRoutine = false;
    }
    
    
    // *break_img* updates
    if (t >= 0.0 && break_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_img.tStart = t;  // (not accounting for frame time here)
      break_img.frameNStart = frameN;  // exact frame index
      
      break_img.setAutoDraw(true);
    }

    
    // *end_break* updates
    if (t >= 0.0 && end_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_break.tStart = t;  // (not accounting for frame time here)
      end_break.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_break.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_break.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_break.clearEvents(); });
    }

    if (end_break.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_break.getKeys({keyList: ['return'], waitRelease: false});
      _end_break_allKeys = _end_break_allKeys.concat(theseKeys);
      if (_end_break_allKeys.length > 0) {
        end_break.keys = _end_break_allKeys[_end_break_allKeys.length - 1].name;  // just the last key pressed
        end_break.rt = _end_break_allKeys[_end_break_allKeys.length - 1].rt;
        end_break.duration = _end_break_allKeys[_end_break_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function block_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_break' ---
    for (const thisComponent of block_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from block_break_control
    startTimeBreak = 0;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_break.corr, level);
    }
    psychoJS.experiment.addData('end_break.keys', end_break.keys);
    if (typeof end_break.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_break.rt', end_break.rt);
        psychoJS.experiment.addData('end_break.duration', end_break.duration);
        routineTimer.reset();
        }
    
    end_break.stop();
    // the Routine "block_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function end_videoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_video' ---
    t = 0;
    end_videoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_exp.keys = undefined;
    end_exp.rt = undefined;
    _end_exp_allKeys = [];
    // keep track of which components have finished
    end_videoComponents = [];
    end_videoComponents.push(video_endmain);
    end_videoComponents.push(end_exp);
    
    for (const thisComponent of end_videoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function end_videoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_video' ---
    // get current time
    t = end_videoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *video_endmain* updates
    if (t >= 0 && video_endmain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      video_endmain.tStart = t;  // (not accounting for frame time here)
      video_endmain.frameNStart = frameN;  // exact frame index
      
      video_endmain.setAutoDraw(true);
      video_endmain.play();
    }

    
    // *end_exp* updates
    if (t >= 0.0 && end_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_exp.tStart = t;  // (not accounting for frame time here)
      end_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_exp.clearEvents(); });
    }

    if (end_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_exp.getKeys({keyList: ['return'], waitRelease: false});
      _end_exp_allKeys = _end_exp_allKeys.concat(theseKeys);
      if (_end_exp_allKeys.length > 0) {
        end_exp.keys = _end_exp_allKeys[_end_exp_allKeys.length - 1].name;  // just the last key pressed
        end_exp.rt = _end_exp_allKeys[_end_exp_allKeys.length - 1].rt;
        end_exp.duration = _end_exp_allKeys[_end_exp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_videoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function end_videoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_video' ---
    for (const thisComponent of end_videoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    video_endmain.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_exp.corr, level);
    }
    psychoJS.experiment.addData('end_exp.keys', end_exp.keys);
    if (typeof end_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_exp.rt', end_exp.rt);
        psychoJS.experiment.addData('end_exp.duration', end_exp.duration);
        routineTimer.reset();
        }
    
    end_exp.stop();
    // the Routine "end_video" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
