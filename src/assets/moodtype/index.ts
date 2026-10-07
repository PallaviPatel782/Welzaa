export const MOOD_GIFS = {
  angry: require('./Angry.gif'),
  burnedOut: require('./BurnedOut.gif'),
  confident: require('./Confident.gif'),
  excited: require('./Excited.gif'),
  happy: require('./Happy.gif'),
  neutral: require('./Neutral.gif'),
  numb: require('./Numb.gif'),
  overwhelmed: require('./Overwhelmed.gif'),
  sad: require('./Sad.gif'),
  stressed: require('./Stressed.gif'),
  tired: require('./Tired.gif'),
  vulnerable: require('./Vulnerable.gif'),
};

export const getMoodGif = (moodKey?: string) => {
  if (!moodKey) return MOOD_GIFS.happy;
  const key = moodKey.toLowerCase().trim();
  switch (key) {
    case 'happy':
    case 'calm':
      return MOOD_GIFS.happy;
    case 'excited':
      return MOOD_GIFS.excited;
    case 'confident':
      return MOOD_GIFS.confident;
    case 'neutral':
      return MOOD_GIFS.neutral;
    case 'tired':
      return MOOD_GIFS.tired;
    case 'stressed':
      return MOOD_GIFS.stressed;
    case 'sad':
      return MOOD_GIFS.sad;
    case 'angry':
      return MOOD_GIFS.angry;
    case 'burnedout':
    case 'burned out':
      return MOOD_GIFS.burnedOut;
    case 'numb':
    case 'confused':
      return MOOD_GIFS.numb;
    case 'overwhelmed':
      return MOOD_GIFS.overwhelmed;
    case 'vulnerable':
      return MOOD_GIFS.vulnerable;
    default:
      return MOOD_GIFS.happy;
  }
};
