import AppData from '@data/app.json';

const TopBackgroundModule = () => {
  return (
    <>
      {/* curtain */}
      <div className='ja-curtain'></div>

      {/* top background */}
      <div
        className='ja-top-bg'
        style={{ backgroundImage: 'url(' + AppData.header.topBackground + ')' }}
      >
        {/* overlay */}
        <div className='ja-top-bg-overlay'></div>
        {/* overlay end */}
      </div>
      {/* top background end */}
    </>
  );
};
export default TopBackgroundModule;
