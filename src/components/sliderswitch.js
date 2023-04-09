import styles from '../styles/sliderswitch.module.css';

const SliderSwitch = ({ setShowSlider }) => {

  return (
    <div className={styles.container}>
      <div className={styles.switch}>
        <div>
          Slider
        </div>

        <div>
          Value
        </div>
      </div>
    </div>
  )
}

export default SliderSwitch;
