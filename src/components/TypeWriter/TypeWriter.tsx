import './TypeWriter.scss';

const TypeWriter = () => {
  return (
    <div className='typewriter-container'>
      <p className='first'>Magnus Byrkjeland&apos;s Personal Website 🚀</p>
      <p className='second'>Sick right!?</p>
      <p className='third'>Maybe not what you thought you would find...</p>
      <p className='fourth'>but I wanted the page to stand out!</p>
      <p className='fifth'>You see, in good Norwegian I&apos;m &quot;miljøskadd&quot;...</p>
      <p className='sixth'>My dad is an airline pilot.</p>
      <p className='seventh'>So this page looks like the</p>
      <p className='eighth'>communication displays found in the cockpit.</p>
      <p className='ninth'>Though it kind of looks like an old computer screen too!</p>
      <br />
      <p className='tenth'>Anyway...</p>
      <p className='eleventh'>You can find my Github, LinkedIn &apos;n stuff below:</p>
      <div className='twelvth socials-container'>
        <div className='github'>
          <a href='#' target='_blank'>
            Github
          </a>
        </div>
        <div className='linkedin'>
          <a href='#' target='_blank'>
            Linkedin
          </a>
        </div>
      </div>
      <p className='thirteenth'>Wow! You&apos;re still here?? Impressive!</p>
      <p className='fourteenth'>K&apos; then, I have some more to show you...</p>
      <p className='fifteenth'>
        <a href='#' className='link'>
          Click me ❤️
        </a>
      </p>
    </div>
  );
};

export default TypeWriter;
