const SET_FILES_COUNT = 'SET_FILES_COUNT';
const SET_FILES = 'SET_FILES';
const SET_CURRENT_DIR = 'SET_CURRENT_DIR';
const ADD_FILE = 'ADD_FILE';
const ADD_DIR = 'ADD_DIR';
const PUSH_TO_STACK = 'PUSH_TO_STACK';
const REPLACE_STACK = 'REPLACE_STACK';
const DELETE_FILE = 'DELETE_FILE';
const SET_VIEW = 'SET_VIEW';

const defaultState = {
  filesCount: 0,
  files: [],
  currentDir: { id: 'root', name: 'Моє сховище' },
  dirStack: [{ id: 'root', name: 'Моє сховище' }],
  view: 'list',
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FILES_COUNT:
      return { ...state, filesCount: action.payload };
    case SET_FILES:
      return { ...state, files: action.payload };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: action.payload };
    case ADD_FILE:
      return { ...state, files: [...state.files, action.payload] };
    case ADD_DIR:
      const dirs = state.files.filter(file => file.type === 'dir');
      const files = state.files.filter(file => file.type !== 'dir');
      return { ...state, files: [...dirs, action.payload, ...files] };
    case PUSH_TO_STACK:
      return { ...state, dirStack: [...state.dirStack, action.payload] };
    case REPLACE_STACK:
      state.dirStack[state.dirStack.length - 1] = action.payload;
      return { ...state, dirStack: [...state.dirStack] };
    case DELETE_FILE:
      return { ...state, files: [...state.files.filter(file => file._id !== action.payload)] };
    case SET_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
}

export const setFilesCount = count => ({ type: SET_FILES_COUNT, payload: count });
export const setFiles = files => ({ type: SET_FILES, payload: files });
export const setCurrentDir = dir => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = file => ({ type: ADD_FILE, payload: file });
export const addDir = dir => ({ type: ADD_DIR, payload: dir });
export const pushToStack = dir => ({ type: PUSH_TO_STACK, payload: dir });
export const replaceStack = dir => ({ type: REPLACE_STACK, payload: dir });
export const deleteFileAction = dirId => ({ type: DELETE_FILE, payload: dirId });
export const setFileView = payload => ({ type: SET_VIEW, payload });
