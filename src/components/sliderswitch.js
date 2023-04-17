import styles from '../styles/sliderswitch.module.css';

const SliderSwitch = ({ showSlider, setShowSlider }) => {
  
  const valueButtonStyle = showSlider ? '' : styles.active;
  const sliderButtonStyle = showSlider ? styles.active : '';

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <div onClick={() => setShowSlider(true)} className={sliderButtonStyle}>
          Slider
        </div>

        <div onClick={() => setShowSlider(false)} className={valueButtonStyle}>
          Value
        </div>
      </div>
    </div>
  )
}

export default SliderSwitch;
