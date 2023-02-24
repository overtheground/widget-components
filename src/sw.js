import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupPrecaching(getFiles());
