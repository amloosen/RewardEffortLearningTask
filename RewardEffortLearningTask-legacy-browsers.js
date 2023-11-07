/********************************* 
 * Rewardeffortlearningtask Test *
 *********************************/


// store info about the experiment session:
let expName = 'RewardEffortLearningTask';  // from the Builder filename that created this script
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
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
flowScheduler.add(practice_video_online_2RoutineBegin());
flowScheduler.add(practice_video_online_2RoutineEachFrame());
flowScheduler.add(practice_video_online_2RoutineEnd());
const instruct_slidesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instruct_slidesLoopBegin(instruct_slidesLoopScheduler));
flowScheduler.add(instruct_slidesLoopScheduler);
flowScheduler.add(instruct_slidesLoopEnd);
const practicetrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practicetrialsLoopBegin(practicetrialsLoopScheduler));
flowScheduler.add(practicetrialsLoopScheduler);
flowScheduler.add(practicetrialsLoopEnd);
const videorepLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(videorepLoopBegin(videorepLoopScheduler));
flowScheduler.add(videorepLoopScheduler);
flowScheduler.add(videorepLoopEnd);
flowScheduler.add(video_main_task_startRoutineBegin());
flowScheduler.add(video_main_task_startRoutineEachFrame());
flowScheduler.add(video_main_task_startRoutineEnd());
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
    {'name': 'pract1.csv', 'path': 'pract1.csv'},
    {'name': 'quiz.csv', 'path': 'quiz.csv'},
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
    {'name': 'stim/fuelShipFull-01.png', 'path': 'stim/fuelShipFull-01.png'},
    {'name': 'stim/astronaut.png', 'path': 'stim/astronaut.png'},
    {'name': 'stim/PractVideoEffortReward_WSubtitles.mp4', 'path': 'stim/PractVideoEffortReward_WSubtitles.mp4'},
    {'name': 'stim/TankOnlyEmpt-01.png', 'path': 'stim/TankOnlyEmpt-01.png'},
    {'name': 'stim/fingers.png', 'path': 'stim/fingers.png'},
    {'name': 'stim/MainTaskVideoEffortReward_WSubtitles.mp4', 'path': 'stim/MainTaskVideoEffortReward_WSubtitles.mp4'},
    {'name': 'stim/gray_simple_rocket_w_rubble.png', 'path': 'stim/gray_simple_rocket_w_rubble.png'},
    {'name': 'stim/StartTaskGame.mp4', 'path': 'stim/StartTaskGame.mp4'},
    {'name': 'stim/image1.png', 'path': 'stim/image1.png'},
    {'name': 'stim/image7.png', 'path': 'stim/image7.png'},
    {'name': 'stim/fuelShipWhite.png', 'path': 'stim/fuelShipWhite.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
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
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  start_video = new visual.TextBox({
    win: psychoJS.window,
    name: 'start_video',
    text: 'PRESS ENTER TO START',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [(- 0.4118), (- 1.0), 0.0196], borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  rocket_full = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rocket_full', units : undefined, 
    image : 'stim/fuelShipFull-01.png', mask : undefined,
    anchor : 'center',
    ori : -45.0, pos : [0.4, 0], size : [0.4, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  astronaut = new visual.ImageStim({
    win : psychoJS.window,
    name : 'astronaut', units : undefined, 
    image : 'stim/astronaut.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  experiment_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_video_online_2"
  practice_video_online_2Clock = new util.Clock();
  practice_instruction_video_onlineClock = new util.Clock();
  practice_instruction_video_online = new visual.MovieStim({
    win: psychoJS.window,
    name: 'practice_instruction_video_online',
    units: psychoJS.window.units,
    movie: 'stim/PractVideoEffortReward_WSubtitles.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2, 2],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Run 'Begin Experiment' code from code_practinstr_online
  key_instructions = " ";
  
  textbox_keyspract = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_keyspract',
    text: key_instructions,
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.3)], 
    letterHeight: 0.09,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: [0.3569, 0.6941, 1.0], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "practice_instructions"
  practice_instructionsClock = new util.Clock();
  // Run 'Begin Experiment' code from selectText
  instructions1 = "";
  instructions2 = "";
  instructions3 = "";
  slidesCounter = (- 1);
  
  practice_intro_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_intro_text1',
    text: instructions1,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.55], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  practice_intro_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_intro_text2',
    text: instructions2,
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  practice_intro_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_intro_text3',
    text: instructions3,
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  practice_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  tank_intro = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tank_intro', units : undefined, 
    image : 'stim/TankOnlyEmpt-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1, 1.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  background_outline_intro = new visual.Rect ({
    win: psychoJS.window, name: 'background_outline_intro', 
    width: [0.12, 0.43][0], height: [0.12, 0.43][1],
    ori: 0, pos: [0, (- 0.35)],
    anchor: 'bottom-center',
    lineWidth: 2, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  barBody_Intro = new visual.Rect ({
    win: psychoJS.window, name: 'barBody_Intro', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    anchor: 'bottom-center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color("'#2b773e'"),
    fillColor: new util.Color("'#2b773e'"),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  treshLine_intro = new visual.ShapeStim ({
    win: psychoJS.window, name: 'treshLine_intro', 
    vertices: [[-[0.12, 0.08][0]/2.0, 0], [+[0.12, 0.08][0]/2.0, 0]],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  red_arrow = new visual.ShapeStim ({
    win: psychoJS.window, name: 'red_arrow', 
    vertices: 'arrow', size:[0.12, 0.1],
    ori: -90.0, pos: [0.15, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    fillColor: new util.Color([1.0, (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  fingers = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fingers', units : undefined, 
    image : 'stim/fingers.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [0.28, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  pract_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pract_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from practcalibration_keys
  max_incr_pract = [];
  max_incr_pSec_pract = (- 1);
  tankSize = 0;
  tankMaxSize = 0.55;
  time_available_pract = 5;
  tscore_pract = 0;
  timer_pract = null;
  practCounter = (- 1);
  
  tank_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tank_2', units : undefined, 
    image : 'stim/TankOnlyEmpt-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.5, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  background_4 = new visual.Rect ({
    win: psychoJS.window, name: 'background_4', 
    width: [0.15, tankMaxSize][0], height: [0.15, tankMaxSize][1],
    ori: 0, pos: [(- 0.5), (- 0.5)],
    anchor: 'bottom-center',
    lineWidth: 2, 
    colorSpace: 'rgb',
    lineColor: new util.Color('0.0902, -1.0000, -1.0000'),
    fillColor: new util.Color('0.0902, -1.0000, -1.0000'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  background_outline = new visual.Rect ({
    win: psychoJS.window, name: 'background_outline', 
    width: [0.15, tankMaxSize][0], height: [0.15, tankMaxSize][1],
    ori: 0, pos: [0, (- 0.5)],
    anchor: 'bottom-center',
    lineWidth: 2, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  barBody_2 = new visual.Rect ({
    win: psychoJS.window, name: 'barBody_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    anchor: 'bottom-center',
    lineWidth: 1, 
    colorSpace: 'rgb',
    lineColor: new util.Color("'#2b773e'"),
    fillColor: new util.Color("'#2b773e'"),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  treshLine = new visual.ShapeStim ({
    win: psychoJS.window, name: 'treshLine', 
    vertices: [[-[0.15, 0.1][0]/2.0, 0], [+[0.15, 0.1][0]/2.0, 0]],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  photodiode_pr1 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_pr1', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from checkAchieved_pract
  feedbackText = "";
  feedbackTime = 3;
  
  feedbackMsg_pract = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackMsg_pract',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  photodiode_pr2 = visual.ShapeStim({
    win: psychoJS.window, name: 'photodiode_pr2', , 
    vertices=undefined, size=[0.45, 0.45],
    ori: 0.0, pos: [(- 1), (- 1)],
    anchor: 'bottom-left',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "main_video_online"
  main_video_onlineClock = new util.Clock();
  main_instruction_video_onlineClock = new util.Clock();
  main_instruction_video_online = new visual.MovieStim({
    win: psychoJS.window,
    name: 'main_instruction_video_online',
    units: psychoJS.window.units,
    movie: 'stim/MainTaskVideoEffortReward_WSubtitles.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2, 2],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Run 'Begin Experiment' code from code_maininstr_online
  key_instructions = " ";
  
  textbox_keysmain = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_keysmain',
    text: key_instructions,
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.3)], 
    letterHeight: 0.09,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: [0.3569, 0.6941, 1.0], colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "pre_quiz"
  pre_quizClock = new util.Clock();
  // Run 'Begin Experiment' code from continue_toquiz
  prequizCounter = (- 1);
  
  announcement_quiz1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'announcement_quiz1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  announcement_quiz2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'announcement_quiz2',
    text: '\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  spaceship = new visual.ImageStim({
    win : psychoJS.window,
    name : 'spaceship', units : undefined, 
    image : 'stim/fuelShipFull-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.5), (- 0.02)], size : [0.4, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  crashed_spaceship = new visual.ImageStim({
    win : psychoJS.window,
    name : 'crashed_spaceship', units : undefined, 
    image : 'stim/gray_simple_rocket_w_rubble.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.02)], size : [0.3, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "instr_quiz"
  instr_quizClock = new util.Clock();
  Multiple_Choice1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Multiple_Choice1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.6], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  press_enter = new visual.TextStim({
    win: psychoJS.window,
    name: 'press_enter',
    text: 'Press ENTER to continue to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  box1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box1',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.1], 
    letterHeight: 0.08,
    lineSpacing: 1.0,
    size: [1.5, 0.2],  units: undefined, 
    color: 'grey', colorSpace: 'rgb',
    fillColor: [1, 1, 1], borderColor: [0.3569, 0.6941, 0.8039],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  box2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    letterHeight: 0.08,
    lineSpacing: 1.0,
    size: [1.5, 0.2],  units: undefined, 
    color: 'grey', colorSpace: 'rgb',
    fillColor: [1, 1, 1], borderColor: [0.3569, 0.6941, 0.8039],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  box3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'box3',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.5)], 
    letterHeight: 0.08,
    lineSpacing: 1.0,
    size: [1.5, 0.2],  units: undefined, 
    color: 'grey', colorSpace: 'rgb',
    fillColor: [1, 1, 1], borderColor: [0.3569, 0.6941, 0.8039],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from code
  quizCounter = (- 1);
  clickables = [box1, box2, box3];
  correct = null;
  check_loc3 = [0.9, (- 0.56)];
  check_loc2 = [0.9, (- 0.26)];
  check_loc1 = [0.9, 0.04];
  check_loc = [0, 0];
  
  next_quest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  check_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'check_img', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : check_loc, size : [0.2, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "feedback_quiz"
  feedback_quizClock = new util.Clock();
  // Run 'Begin Experiment' code from checkQuiz
  feedbackTextQuiz = "";
  feedbackTimeQuiz = 4;
  
  feedbackMsgQuiz_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackMsgQuiz_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  feedback_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'feedback_image_2', units : undefined, 
    image : 'stim/gray_simple_rocket_w_rubble.png', mask : undefined,
    anchor : 'center',
    ori : 10.0, pos : [0.5, (- 0.2)], size : [0.3, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "video_main_task_start"
  video_main_task_startClock = new util.Clock();
  video_startmainClock = new util.Clock();
  video_startmain = new visual.MovieStim({
    win: psychoJS.window,
    name: 'video_startmain',
    units: psychoJS.window.units,
    movie: 'stim/StartTaskGame.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2, 2],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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

function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start' ---
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    experiment_start.keys = undefined;
    experiment_start.rt = undefined;
    _experiment_start_allKeys = [];
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(start_video);
    StartComponents.push(rocket_full);
    StartComponents.push(astronaut);
    StartComponents.push(experiment_start);
    
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function StartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start' ---
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_video* updates
    if (t >= 0.0 && start_video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_video.tStart = t;  // (not accounting for frame time here)
      start_video.frameNStart = frameN;  // exact frame index
      
      start_video.setAutoDraw(true);
    }

    
    // *rocket_full* updates
    if (t >= 0.0 && rocket_full.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rocket_full.tStart = t;  // (not accounting for frame time here)
      rocket_full.frameNStart = frameN;  // exact frame index
      
      rocket_full.setAutoDraw(true);
    }

    
    // *astronaut* updates
    if (t >= 0.0 && astronaut.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      astronaut.tStart = t;  // (not accounting for frame time here)
      astronaut.frameNStart = frameN;  // exact frame index
      
      astronaut.setAutoDraw(true);
    }

    
    // *experiment_start* updates
    if (t >= 0 && experiment_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiment_start.tStart = t;  // (not accounting for frame time here)
      experiment_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { experiment_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { experiment_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { experiment_start.clearEvents(); });
    }

    if (experiment_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = experiment_start.getKeys({keyList: ['return'], waitRelease: false});
      _experiment_start_allKeys = _experiment_start_allKeys.concat(theseKeys);
      if (_experiment_start_allKeys.length > 0) {
        experiment_start.keys = _experiment_start_allKeys.map((key) => key.name);  // storing all keys
        experiment_start.rt = _experiment_start_allKeys.map((key) => key.rt);
        experiment_start.duration = _experiment_start_allKeys.map((key) => key.duration);
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
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function StartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start' ---
    StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(experiment_start.corr, level);
    }
    psychoJS.experiment.addData('experiment_start.keys', experiment_start.keys);
    if (typeof experiment_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('experiment_start.rt', experiment_start.rt);
        psychoJS.experiment.addData('experiment_start.duration', experiment_start.duration);
        routineTimer.reset();
        }
    
    experiment_start.stop();
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function practice_video_online_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_video_online_2' ---
    t = 0;
    practice_video_online_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_practinstr_online
    movieIsPlaying = false;
    movieWasPaused = false;
    movieWasPlayed = false;
    timeLimitPerSeek = 1;
    currentTimeValue = 0;
    spacePressed = false;
    movieTimeframe = 0;
    movieDuration = 66;
    key_instructions = "Press 'space' to pause or play, and use the left 'arrow' to rewind.";
    
    // keep track of which components have finished
    practice_video_online_2Components = [];
    practice_video_online_2Components.push(practice_instruction_video_online);
    practice_video_online_2Components.push(textbox_keyspract);
    
    practice_video_online_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function practice_video_online_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_video_online_2' ---
    // get current time
    t = practice_video_online_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_instruction_video_online* updates
    if (t >= 0 && practice_instruction_video_online.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_instruction_video_online.tStart = t;  // (not accounting for frame time here)
      practice_instruction_video_online.frameNStart = frameN;  // exact frame index
      
      practice_instruction_video_online.setAutoDraw(true);
      practice_instruction_video_online.play();
    }

    if (practice_instruction_video_online.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // Run 'Each Frame' code from code_practinstr_online
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
    keys = psychoJS.eventManager.getKeys({"keyList": ["space", "left"]});
    if (_pj.in_es6("space", keys)) {
        spacePressed = (! spacePressed);
    }
    if (_pj.in_es6("left", keys)) {
        currentTimeValue -= 1;
        practice_instruction_video_online.seek(util.round((practice_instruction_video_online.duration * currentTimeValue)));
    }
    if (spacePressed) {
        practice_instruction_video_online.play();
        textbox_keyspract.setText("", {"log": false});
    } else {
        practice_instruction_video_online.pause();
        textbox_keyspract.setText("Press 'space' to pause or play, and use the left 'arrow' to rewind.", {"log": false});
    }
    
    
    // *textbox_keyspract* updates
    if (((spacePressed == False)) && textbox_keyspract.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_keyspract.tStart = t;  // (not accounting for frame time here)
      textbox_keyspract.frameNStart = frameN;  // exact frame index
      
      textbox_keyspract.setAutoDraw(true);
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
    practice_video_online_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_video_online_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_video_online_2' ---
    practice_video_online_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    practice_instruction_video_online.stop();
    // the Routine "practice_video_online_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instruct_slidesLoopBegin(instruct_slidesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instruct_slides = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instruct_slides'
    });
    psychoJS.experiment.addLoop(instruct_slides); // add the loop to the experiment
    currentLoop = instruct_slides;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instruct_slides.forEach(function() {
      snapshot = instruct_slides.getSnapshot();
    
      instruct_slidesLoopScheduler.add(importConditions(snapshot));
      instruct_slidesLoopScheduler.add(practice_instructionsRoutineBegin(snapshot));
      instruct_slidesLoopScheduler.add(practice_instructionsRoutineEachFrame());
      instruct_slidesLoopScheduler.add(practice_instructionsRoutineEnd(snapshot));
      instruct_slidesLoopScheduler.add(instruct_slidesLoopEndIteration(instruct_slidesLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function instruct_slidesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instruct_slides);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function instruct_slidesLoopEndIteration(scheduler, snapshot) {
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

function practicetrialsLoopBegin(practicetrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practicetrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pract1.csv',
      seed: undefined, name: 'practicetrials'
    });
    psychoJS.experiment.addLoop(practicetrials); // add the loop to the experiment
    currentLoop = practicetrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practicetrials.forEach(function() {
      snapshot = practicetrials.getSnapshot();
    
      practicetrialsLoopScheduler.add(importConditions(snapshot));
      practicetrialsLoopScheduler.add(practiceRoutineBegin(snapshot));
      practicetrialsLoopScheduler.add(practiceRoutineEachFrame());
      practicetrialsLoopScheduler.add(practiceRoutineEnd(snapshot));
      practicetrialsLoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practicetrialsLoopScheduler.add(practice_feedbackRoutineEachFrame());
      practicetrialsLoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      practicetrialsLoopScheduler.add(practicetrialsLoopEndIteration(practicetrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function practicetrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practicetrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function practicetrialsLoopEndIteration(scheduler, snapshot) {
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

function videorepLoopBegin(videorepLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    videorep = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'videorep'
    });
    psychoJS.experiment.addLoop(videorep); // add the loop to the experiment
    currentLoop = videorep;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    videorep.forEach(function() {
      snapshot = videorep.getSnapshot();
    
      videorepLoopScheduler.add(importConditions(snapshot));
      videorepLoopScheduler.add(main_video_onlineRoutineBegin(snapshot));
      videorepLoopScheduler.add(main_video_onlineRoutineEachFrame());
      videorepLoopScheduler.add(main_video_onlineRoutineEnd(snapshot));
      const pre_quiz_instrLoopScheduler = new Scheduler(psychoJS);
      videorepLoopScheduler.add(pre_quiz_instrLoopBegin(pre_quiz_instrLoopScheduler, snapshot));
      videorepLoopScheduler.add(pre_quiz_instrLoopScheduler);
      videorepLoopScheduler.add(pre_quiz_instrLoopEnd);
      const instructionquiz_repLoopScheduler = new Scheduler(psychoJS);
      videorepLoopScheduler.add(instructionquiz_repLoopBegin(instructionquiz_repLoopScheduler, snapshot));
      videorepLoopScheduler.add(instructionquiz_repLoopScheduler);
      videorepLoopScheduler.add(instructionquiz_repLoopEnd);
      videorepLoopScheduler.add(videorepLoopEndIteration(videorepLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function pre_quiz_instrLoopBegin(pre_quiz_instrLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pre_quiz_instr = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pre_quiz_instr'
    });
    psychoJS.experiment.addLoop(pre_quiz_instr); // add the loop to the experiment
    currentLoop = pre_quiz_instr;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pre_quiz_instr.forEach(function() {
      snapshot = pre_quiz_instr.getSnapshot();
    
      pre_quiz_instrLoopScheduler.add(importConditions(snapshot));
      pre_quiz_instrLoopScheduler.add(pre_quizRoutineBegin(snapshot));
      pre_quiz_instrLoopScheduler.add(pre_quizRoutineEachFrame());
      pre_quiz_instrLoopScheduler.add(pre_quizRoutineEnd(snapshot));
      pre_quiz_instrLoopScheduler.add(pre_quiz_instrLoopEndIteration(pre_quiz_instrLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function pre_quiz_instrLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pre_quiz_instr);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function pre_quiz_instrLoopEndIteration(scheduler, snapshot) {
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

function instructionquiz_repLoopBegin(instructionquiz_repLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructionquiz_rep = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instructionquiz_rep'
    });
    psychoJS.experiment.addLoop(instructionquiz_rep); // add the loop to the experiment
    currentLoop = instructionquiz_rep;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructionquiz_rep.forEach(function() {
      snapshot = instructionquiz_rep.getSnapshot();
    
      instructionquiz_repLoopScheduler.add(importConditions(snapshot));
      const instructionquizLoopScheduler = new Scheduler(psychoJS);
      instructionquiz_repLoopScheduler.add(instructionquizLoopBegin(instructionquizLoopScheduler, snapshot));
      instructionquiz_repLoopScheduler.add(instructionquizLoopScheduler);
      instructionquiz_repLoopScheduler.add(instructionquizLoopEnd);
      instructionquiz_repLoopScheduler.add(feedback_quizRoutineBegin(snapshot));
      instructionquiz_repLoopScheduler.add(feedback_quizRoutineEachFrame());
      instructionquiz_repLoopScheduler.add(feedback_quizRoutineEnd(snapshot));
      instructionquiz_repLoopScheduler.add(instructionquiz_repLoopEndIteration(instructionquiz_repLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function instructionquizLoopBegin(instructionquizLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructionquiz = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'quiz.csv',
      seed: undefined, name: 'instructionquiz'
    });
    psychoJS.experiment.addLoop(instructionquiz); // add the loop to the experiment
    currentLoop = instructionquiz;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instructionquiz.forEach(function() {
      snapshot = instructionquiz.getSnapshot();
    
      instructionquizLoopScheduler.add(importConditions(snapshot));
      instructionquizLoopScheduler.add(instr_quizRoutineBegin(snapshot));
      instructionquizLoopScheduler.add(instr_quizRoutineEachFrame());
      instructionquizLoopScheduler.add(instr_quizRoutineEnd(snapshot));
      instructionquizLoopScheduler.add(instructionquizLoopEndIteration(instructionquizLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function instructionquizLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructionquiz);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function instructionquizLoopEndIteration(scheduler, snapshot) {
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

async function instructionquiz_repLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructionquiz_rep);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function instructionquiz_repLoopEndIteration(scheduler, snapshot) {
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

async function videorepLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(videorep);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function videorepLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
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
    blocks.forEach(function() {
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
    });
    
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
    trials.forEach(function() {
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
    });
    
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

function practice_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_instructions' ---
    t = 0;
    practice_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from selectText
    slidesCounter += 1;
    if ((slidesCounter === 0)) {
        instructions1 = "On the next screen, you will see a fuel tank marked with a red line. Your goal is to fill it up to the red line, just as demonstrated in the video.";
        instructions2 = "";
        instructions3 = "Press ENTER to continue.";
    } else {
        instructions1 = "Alternate between pressing 'z' with your left index finger and 'p' with your right index finger as fast as you can to reach the red bar.";
        instructions2 = "You will have 5 seconds to fill the tank.";
        instructions3 = "Press ENTER to Start!";
    }
    practice_intro_text1.text = instructions1;
    practice_intro_text2.text = instructions2;
    practice_intro_text3.text = instructions3;
    
    practice_start.keys = undefined;
    practice_start.rt = undefined;
    _practice_start_allKeys = [];
    treshLine_intro.setPos([0, 0]);
    // keep track of which components have finished
    practice_instructionsComponents = [];
    practice_instructionsComponents.push(practice_intro_text1);
    practice_instructionsComponents.push(practice_intro_text2);
    practice_instructionsComponents.push(practice_intro_text3);
    practice_instructionsComponents.push(practice_start);
    practice_instructionsComponents.push(tank_intro);
    practice_instructionsComponents.push(background_outline_intro);
    practice_instructionsComponents.push(barBody_Intro);
    practice_instructionsComponents.push(treshLine_intro);
    practice_instructionsComponents.push(red_arrow);
    practice_instructionsComponents.push(fingers);
    
    practice_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function practice_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_instructions' ---
    // get current time
    t = practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_intro_text1* updates
    if (t >= 0.0 && practice_intro_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_intro_text1.tStart = t;  // (not accounting for frame time here)
      practice_intro_text1.frameNStart = frameN;  // exact frame index
      
      practice_intro_text1.setAutoDraw(true);
    }

    
    // *practice_intro_text2* updates
    if (t >= 0.0 && practice_intro_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_intro_text2.tStart = t;  // (not accounting for frame time here)
      practice_intro_text2.frameNStart = frameN;  // exact frame index
      
      practice_intro_text2.setAutoDraw(true);
    }

    
    // *practice_intro_text3* updates
    if (t >= 0.0 && practice_intro_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_intro_text3.tStart = t;  // (not accounting for frame time here)
      practice_intro_text3.frameNStart = frameN;  // exact frame index
      
      practice_intro_text3.setAutoDraw(true);
    }

    
    // *practice_start* updates
    if (t >= 0 && practice_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_start.tStart = t;  // (not accounting for frame time here)
      practice_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_start.clearEvents(); });
    }

    if (practice_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_start.getKeys({keyList: ['return'], waitRelease: false});
      _practice_start_allKeys = _practice_start_allKeys.concat(theseKeys);
      if (_practice_start_allKeys.length > 0) {
        practice_start.keys = _practice_start_allKeys.map((key) => key.name);  // storing all keys
        practice_start.rt = _practice_start_allKeys.map((key) => key.rt);
        practice_start.duration = _practice_start_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *tank_intro* updates
    if (((instruct_slides.thisN == 0)) && tank_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tank_intro.tStart = t;  // (not accounting for frame time here)
      tank_intro.frameNStart = frameN;  // exact frame index
      
      tank_intro.setAutoDraw(true);
    }

    
    // *background_outline_intro* updates
    if (((instruct_slides.thisN == 0)) && background_outline_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_outline_intro.tStart = t;  // (not accounting for frame time here)
      background_outline_intro.frameNStart = frameN;  // exact frame index
      
      background_outline_intro.setAutoDraw(true);
    }

    
    // *barBody_Intro* updates
    if (((instruct_slides.thisN == 0)) && barBody_Intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      barBody_Intro.tStart = t;  // (not accounting for frame time here)
      barBody_Intro.frameNStart = frameN;  // exact frame index
      
      barBody_Intro.setAutoDraw(true);
    }

    
    if (barBody_Intro.status === PsychoJS.Status.STARTED){ // only update if being drawn
      barBody_Intro.setPos([0, (- 0.35)], false);
      barBody_Intro.setSize([0.12, 0.08], false);
    }
    
    // *treshLine_intro* updates
    if (((instruct_slides.thisN == 0)) && treshLine_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treshLine_intro.tStart = t;  // (not accounting for frame time here)
      treshLine_intro.frameNStart = frameN;  // exact frame index
      
      treshLine_intro.setAutoDraw(true);
    }

    
    // *red_arrow* updates
    if (((instruct_slides.thisN == 0)) && red_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      red_arrow.tStart = t;  // (not accounting for frame time here)
      red_arrow.frameNStart = frameN;  // exact frame index
      
      red_arrow.setAutoDraw(true);
    }

    
    // *fingers* updates
    if (((instruct_slides.thisN == 1)) && fingers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fingers.tStart = t;  // (not accounting for frame time here)
      fingers.frameNStart = frameN;  // exact frame index
      
      fingers.setAutoDraw(true);
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
    practice_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_instructions' ---
    practice_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practice_start.corr, level);
    }
    psychoJS.experiment.addData('practice_start.keys', practice_start.keys);
    if (typeof practice_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practice_start.rt', practice_start.rt);
        psychoJS.experiment.addData('practice_start.duration', practice_start.duration);
        routineTimer.reset();
        }
    
    practice_start.stop();
    // the Routine "practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    pract_text.setText('Power up and try to reach the red bar!\n');
    // Run 'Begin Routine' code from practcalibration_keys
    key_sequence = [];
    achieved = 0;
    firstIncr = false;
    rscore_pract = 0;
    tankSize = 0;
    achieved = false;
    nIncr_pumps = 0;
    tankSizeIncr_pract = (tankMaxSize / 50);
    practCounter += 1;
    
    treshLine.setPos([0, effTresh]);
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(pract_text);
    practiceComponents.push(tank_2);
    practiceComponents.push(background_4);
    practiceComponents.push(background_outline);
    practiceComponents.push(barBody_2);
    practiceComponents.push(treshLine);
    practiceComponents.push(photodiode_pr1);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pract_text* updates
    if (t >= 0.0 && pract_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pract_text.tStart = t;  // (not accounting for frame time here)
      pract_text.frameNStart = frameN;  // exact frame index
      
      pract_text.setAutoDraw(true);
    }

    // Run 'Each Frame' code from practcalibration_keys
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
    keys = psychoJS.eventManager.getKeys();
    if ((! keys)) {
        continueRoutine = true;
    } else {
        key_pressed = keys[0];
        if (((key_pressed === "z") && (! key_sequence))) {
            key_sequence.push(key_pressed);
            if ((timer_pract === null)) {
                timer_pract = new core.CountdownTimer(time_available_pract);
            }
        } else {
            if (((key_pressed === "p") && _pj.in_es6("z", key_sequence))) {
                key_sequence.push(key_pressed);
            }
        }
        if ((key_sequence === ["z", "p"])) {
            nIncr_pumps += 1;
            key_sequence = [];
        }
    }
    if ((((- 0.5) + tankSize) >= effTresh)) {
        achieved = true;
        rscore_pract = (rscore_pract + 1);
        continueRoutine = false;
    }
    if (((timer_pract !== null) && (timer_pract.getTime() <= 0))) {
        continueRoutine = false;
    }
    tankSize = (nIncr_pumps * tankSizeIncr_pract);
    
    
    // *tank_2* updates
    if (t >= 0 && tank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tank_2.tStart = t;  // (not accounting for frame time here)
      tank_2.frameNStart = frameN;  // exact frame index
      
      tank_2.setAutoDraw(true);
    }

    
    // *background_4* updates
    if (t >= 0.0 && background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_4.tStart = t;  // (not accounting for frame time here)
      background_4.frameNStart = frameN;  // exact frame index
      
      background_4.setAutoDraw(true);
    }

    
    // *background_outline* updates
    if (t >= 0.0 && background_outline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_outline.tStart = t;  // (not accounting for frame time here)
      background_outline.frameNStart = frameN;  // exact frame index
      
      background_outline.setAutoDraw(true);
    }

    
    // *barBody_2* updates
    if (t >= 0.0 && barBody_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      barBody_2.tStart = t;  // (not accounting for frame time here)
      barBody_2.frameNStart = frameN;  // exact frame index
      
      barBody_2.setAutoDraw(true);
    }

    
    if (barBody_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      barBody_2.setPos([0, (- 0.5)], false);
      barBody_2.setSize([0.15, tankSize], false);
    }
    
    // *treshLine* updates
    if (t >= 0.0 && treshLine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treshLine.tStart = t;  // (not accounting for frame time here)
      treshLine.frameNStart = frameN;  // exact frame index
      
      treshLine.setAutoDraw(true);
    }

    
    // *photodiode_pr1* updates
    if (t >= 0.0 && photodiode_pr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_pr1.tStart = t;  // (not accounting for frame time here)
      photodiode_pr1.frameNStart = frameN;  // exact frame index
      
      photodiode_pr1.setAutoDraw(true);
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
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from practcalibration_keys
    tscore_pract += rscore_pract;
    max_incr_pract.push((nIncr_pumps / t));
    max_incr_pSec_pract = Math.max(max_incr_pract);
    timer_pract = null;
    practicetrials.addData("nr_of_incr_pract", nIncr_pumps);
    practicetrials.addData("trial_score_pract", rscore_pract);
    practicetrials.addData("total_score_pract", tscore_pract);
    practicetrials.addData("treshold_pract", effTresh);
    practicetrials.addData("trial_duration_pract", t);
    practicetrials.addData("max_incr_pSec_pract", max_incr_pSec_pract);
    practicetrials.addData("max_incr_pract", max_incr_pract);
    
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_feedback' ---
    t = 0;
    practice_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkAchieved_pract
    if ((achieved === true)) {
        feedbackText = "Well done you reached the treshold!";
    } else {
        if (((practCounter === 7) && (achieved === true))) {
            feedbackText = "Well done. We will now move on to the main game!";
        } else {
            if (((practCounter === 7) && (achieved === false))) {
                feedbackText = "You completed the practice rounds. We will now move on to the main game!";
            } else {
                feedbackText = "Not quite there yet. Add a bit more power!";
            }
        }
    }
    
    feedbackMsg_pract.setText(feedbackText);
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(feedbackMsg_pract);
    practice_feedbackComponents.push(photodiode_pr2);
    
    practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function practice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_feedback' ---
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackMsg_pract* updates
    if (t >= 0.0 && feedbackMsg_pract.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackMsg_pract.tStart = t;  // (not accounting for frame time here)
      feedbackMsg_pract.frameNStart = frameN;  // exact frame index
      
      feedbackMsg_pract.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedbackMsg_pract.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackMsg_pract.setAutoDraw(false);
    }
    
    // *photodiode_pr2* updates
    if (t >= 0.0 && photodiode_pr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photodiode_pr2.tStart = t;  // (not accounting for frame time here)
      photodiode_pr2.frameNStart = frameN;  // exact frame index
      
      photodiode_pr2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (photodiode_pr2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      photodiode_pr2.setAutoDraw(false);
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
    practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function practice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_feedback' ---
    practice_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_video_onlineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_video_online' ---
    t = 0;
    main_video_onlineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_maininstr_online
    movieIsPlaying = false;
    movieWasPaused = false;
    movieWasPlayed = false;
    timeLimitPerSeek = 1;
    currentTimeValue = 0;
    spacePressed = false;
    movieTimeframe = 0;
    movieDuration = 123;
    key_instructions = "Press 'space' to pause or play, and use the left 'arrow' to rewind.";
    
    // keep track of which components have finished
    main_video_onlineComponents = [];
    main_video_onlineComponents.push(main_instruction_video_online);
    main_video_onlineComponents.push(textbox_keysmain);
    
    main_video_onlineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_video_onlineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_video_online' ---
    // get current time
    t = main_video_onlineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_instruction_video_online* updates
    if (t >= 0 && main_instruction_video_online.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_instruction_video_online.tStart = t;  // (not accounting for frame time here)
      main_instruction_video_online.frameNStart = frameN;  // exact frame index
      
      main_instruction_video_online.setAutoDraw(true);
      main_instruction_video_online.play();
    }

    // Run 'Each Frame' code from code_maininstr_online
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
    keys = psychoJS.eventManager.getKeys({"keyList": ["space", "left", "return"]});
    if (_pj.in_es6("space", keys)) {
        spacePressed = (! spacePressed);
    }
    if (_pj.in_es6("left", keys)) {
        currentTimeValue -= 1;
        main_instruction_video_online.seek(util.round((main_instruction_video_online.duration * currentTimeValue)));
    }
    if (spacePressed) {
        main_instruction_video_online.play();
        textbox_keysmain.setText("", {"log": false});
    } else {
        main_instruction_video_online.pause();
        textbox_keysmain.setText("Press 'space' to pause or play, and use the left 'arrow' to rewind.", {"log": false});
    }
    if (((t > main_instruction_video_online.duration) && _pj.in_es6("return", keys))) {
        continueRoutine = false;
    }
    
    
    // *textbox_keysmain* updates
    if (((spacePressed == False)) && textbox_keysmain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_keysmain.tStart = t;  // (not accounting for frame time here)
      textbox_keysmain.frameNStart = frameN;  // exact frame index
      
      textbox_keysmain.setAutoDraw(true);
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
    main_video_onlineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_video_onlineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_video_online' ---
    main_video_onlineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    main_instruction_video_online.stop();
    // the Routine "main_video_online" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function pre_quizRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_quiz' ---
    t = 0;
    pre_quizClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from continue_toquiz
    prequizCounter += 1;
    
    // keep track of which components have finished
    pre_quizComponents = [];
    pre_quizComponents.push(announcement_quiz1);
    pre_quizComponents.push(announcement_quiz2);
    pre_quizComponents.push(spaceship);
    pre_quizComponents.push(crashed_spaceship);
    
    pre_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function pre_quizRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_quiz' ---
    // get current time
    t = pre_quizClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from continue_toquiz
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
    keys = psychoJS.eventManager.getKeys({"keyList": ["return"]});
    if ((prequizCounter === 0)) {
        announcement_quiz1.text = "We will now ask you a few questions to ensure you understood the instructions. Answer them as accurately as possible, as you will only proceed to the main game if you answer all of them correctly.";
        announcement_quiz2.text = "Press ENTER to continue!";
    } else {
        announcement_quiz1.text = "You have three attempts. After your third attempt, we will send you back to the instruction video so you can watch it again and afterwards give the quiz another try.";
        announcement_quiz2.text = "Press ENTER to start!";
    }
    if (_pj.in_es6("return", keys)) {
        continueRoutine = false;
    }
    
    
    // *announcement_quiz1* updates
    if (t >= 0 && announcement_quiz1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      announcement_quiz1.tStart = t;  // (not accounting for frame time here)
      announcement_quiz1.frameNStart = frameN;  // exact frame index
      
      announcement_quiz1.setAutoDraw(true);
    }

    
    // *announcement_quiz2* updates
    if (t >= 0 && announcement_quiz2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      announcement_quiz2.tStart = t;  // (not accounting for frame time here)
      announcement_quiz2.frameNStart = frameN;  // exact frame index
      
      announcement_quiz2.setAutoDraw(true);
    }

    
    // *spaceship* updates
    if (t >= 0.0 && spaceship.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceship.tStart = t;  // (not accounting for frame time here)
      spaceship.frameNStart = frameN;  // exact frame index
      
      spaceship.setAutoDraw(true);
    }

    
    // *crashed_spaceship* updates
    if (t >= 0.0 && crashed_spaceship.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      crashed_spaceship.tStart = t;  // (not accounting for frame time here)
      crashed_spaceship.frameNStart = frameN;  // exact frame index
      
      crashed_spaceship.setAutoDraw(true);
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
    pre_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function pre_quizRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_quiz' ---
    pre_quizComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "pre_quiz" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instr_quizRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_quiz' ---
    t = 0;
    instr_quizClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Multiple_Choice1.setText(question);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    box1.setText(resp1);
    box2.setText(resp2);
    box3.setText(resp3);
    // Run 'Begin Routine' code from code
    quizCounter += 1;
    response = 0;
    if ((quizCounter === 0)) {
        quiz_score = 0;
    }
    check_img.image = null;
    for (var box, _pj_c = 0, _pj_a = clickables, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        box.fillColor = "white";
    }
    
    next_quest.keys = undefined;
    next_quest.rt = undefined;
    _next_quest_allKeys = [];
    // keep track of which components have finished
    instr_quizComponents = [];
    instr_quizComponents.push(Multiple_Choice1);
    instr_quizComponents.push(press_enter);
    instr_quizComponents.push(mouse);
    instr_quizComponents.push(box1);
    instr_quizComponents.push(box2);
    instr_quizComponents.push(box3);
    instr_quizComponents.push(next_quest);
    instr_quizComponents.push(check_img);
    
    instr_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function instr_quizRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_quiz' ---
    // get current time
    t = instr_quizClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Multiple_Choice1* updates
    if (t >= 0.0 && Multiple_Choice1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Multiple_Choice1.tStart = t;  // (not accounting for frame time here)
      Multiple_Choice1.frameNStart = frameN;  // exact frame index
      
      Multiple_Choice1.setAutoDraw(true);
    }

    
    // *press_enter* updates
    if (t >= 0.0 && press_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_enter.tStart = t;  // (not accounting for frame time here)
      press_enter.frameNStart = frameN;  // exact frame index
      
      press_enter.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse.status === PsychoJS.Status.STARTED && Boolean((response > 0))) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [[box1, box2, box3]]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    
    // *box1* updates
    if (t >= 0.0 && box1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box1.tStart = t;  // (not accounting for frame time here)
      box1.frameNStart = frameN;  // exact frame index
      
      box1.setAutoDraw(true);
    }

    
    // *box2* updates
    if (t >= 0.0 && box2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box2.tStart = t;  // (not accounting for frame time here)
      box2.frameNStart = frameN;  // exact frame index
      
      box2.setAutoDraw(true);
    }

    
    // *box3* updates
    if (t >= 0.0 && box3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box3.tStart = t;  // (not accounting for frame time here)
      box3.frameNStart = frameN;  // exact frame index
      
      box3.setAutoDraw(true);
    }

    // Run 'Each Frame' code from code
    if ((response === 0)) {
        for (var clickable, _pj_c = 0, _pj_a = clickables, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            clickable = _pj_a[_pj_c];
            if (mouse.isPressedIn(clickable)) {
                for (var box, _pj_f = 0, _pj_d = clickables, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    box = _pj_d[_pj_f];
                    box.fillColor = "white";
                    if ((clickable === box1)) {
                        response = 1;
                        check_loc = check_loc1;
                    } else {
                        if ((clickable === box2)) {
                            response = 2;
                            check_loc = check_loc2;
                        } else {
                            if ((clickable === box3)) {
                                response = 3;
                                check_loc = check_loc3;
                            }
                        }
                    }
                    correct = (response === correctResp);
                    if (correct) {
                        clickable.fillColor = "green";
                        check_img.image = "stim/check-01.png";
                    } else {
                        clickable.fillColor = "red";
                        check_img.image = "stim/cross-01.png";
                    }
                    check_img.setPos(check_loc, {"log": false});
                }
            }
        }
    }
    
    
    // *next_quest* updates
    if (((response > 0)) && next_quest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_quest.tStart = t;  // (not accounting for frame time here)
      next_quest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_quest.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_quest.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_quest.clearEvents(); });
    }

    if (next_quest.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_quest.getKeys({keyList: ['return'], waitRelease: false});
      _next_quest_allKeys = _next_quest_allKeys.concat(theseKeys);
      if (_next_quest_allKeys.length > 0) {
        next_quest.keys = _next_quest_allKeys.map((key) => key.name);  // storing all keys
        next_quest.rt = _next_quest_allKeys.map((key) => key.rt);
        next_quest.duration = _next_quest_allKeys.map((key) => key.duration);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *check_img* updates
    if (t >= 0 && check_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_img.tStart = t;  // (not accounting for frame time here)
      check_img.frameNStart = frameN;  // exact frame index
      
      check_img.setAutoDraw(true);
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
    instr_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_quizRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_quiz' ---
    instr_quizComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // Run 'End Routine' code from code
    if (correct) {
        quiz_score = (quiz_score + 1);
    }
    instructionquiz.addData("correct", correct);
    instructionquiz.addData("response", response);
    instructionquiz.addData("quiz_score", quiz_score);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_quest.corr, level);
    }
    psychoJS.experiment.addData('next_quest.keys', next_quest.keys);
    if (typeof next_quest.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_quest.rt', next_quest.rt);
        psychoJS.experiment.addData('next_quest.duration', next_quest.duration);
        routineTimer.reset();
        }
    
    next_quest.stop();
    // the Routine "instr_quiz" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function feedback_quizRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_quiz' ---
    t = 0;
    feedback_quizClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkQuiz
    if ((quiz_score === 3)) {
        instructionquiz_rep.finished = true;
        videorep.finished = true;
        continueRoutine = false;
    } else {
        if ((quiz_score < 3)) {
            if ((instructionquiz_rep.thisN >= 2)) {
                feedbackTextQuiz = "Unfortunately, not all of your answers are correct. Let's watch the instruction video again and then give it another attempt.";
            } else {
                feedbackTextQuiz = "Unfortunately, not all of your answers are correct. Please give it another attempt.";
            }
        }
    }
    
    feedbackMsgQuiz_2.setText(feedbackTextQuiz);
    // keep track of which components have finished
    feedback_quizComponents = [];
    feedback_quizComponents.push(feedbackMsgQuiz_2);
    feedback_quizComponents.push(feedback_image_2);
    
    feedback_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedback_quizRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_quiz' ---
    // get current time
    t = feedback_quizClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackMsgQuiz_2* updates
    if (t >= 0.0 && feedbackMsgQuiz_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackMsgQuiz_2.tStart = t;  // (not accounting for frame time here)
      feedbackMsgQuiz_2.frameNStart = frameN;  // exact frame index
      
      feedbackMsgQuiz_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTimeQuiz - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedbackMsgQuiz_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackMsgQuiz_2.setAutoDraw(false);
    }
    
    // *feedback_image_2* updates
    if (t >= 0.0 && feedback_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_image_2.tStart = t;  // (not accounting for frame time here)
      feedback_image_2.frameNStart = frameN;  // exact frame index
      
      feedback_image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedbackTimeQuiz - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_image_2.setAutoDraw(false);
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
    feedback_quizComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedback_quizRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_quiz' ---
    feedback_quizComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from checkQuiz
    quiz_score = 0;
    
    // the Routine "feedback_quiz" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function video_main_task_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'video_main_task_start' ---
    t = 0;
    video_main_task_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    video_main_task_startComponents = [];
    video_main_task_startComponents.push(video_startmain);
    video_main_task_startComponents.push(key_resp_2);
    
    video_main_task_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function video_main_task_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'video_main_task_start' ---
    // get current time
    t = video_main_task_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *video_startmain* updates
    if (t >= 0 && video_startmain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      video_startmain.tStart = t;  // (not accounting for frame time here)
      video_startmain.frameNStart = frameN;  // exact frame index
      
      video_startmain.setAutoDraw(true);
      video_startmain.play();
    }

    
    // *key_resp_2* updates
    if (t >= 2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
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
    video_main_task_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function video_main_task_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'video_main_task_start' ---
    video_main_task_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    video_startmain.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "video_main_task_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
    
    reward_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    reward_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    reward_ratingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    crossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    effort_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    effort_ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    effort_ratingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    main_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    main_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    main_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    main_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    block_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    end_videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    end_videoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    end_videoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
