import styles from '../styles/sliderswitch.module.css';

const SliderSwitch = ({ setShowSlider }) => {

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <div onClick={() => setShowSlider(true)}>
          Slider
        </div>

        <div onClick={() => setShowSlider(false)}>
          Value
        </div>
      </div>
    </div>
  )
}

export default SliderSwitch;
