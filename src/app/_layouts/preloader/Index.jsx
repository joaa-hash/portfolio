const PreloaderModule = () => {
  return (
    <>
      {/* preloader */}
      <div className='ja-preloader'>
        {/* preloader content */}
        <div className='ja-preloader-content'>
          {/* title */}
          <h4>Josue Acuna</h4>
          {/* progressbar */}
          <div id='preloader' className='ja-preloader-load'></div>
        </div>
        {/* preloader content end */}
      </div>
      {/* preloader end */}
    </>
  );
};
export default PreloaderModule;
