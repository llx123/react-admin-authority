import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import styles from './weather.less'

function Weather ({
  city, icon, dateTime, temperature, name, loading,
}) {
  return (
    <Spin spinning={loading}>
      <div className={styles.weather}>
        <div className={styles.left}>
          <div className={styles.icon}
            style={{
              backgroundImage: `url(${'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/aladdin/img/new_weath/bigicon/3.png'})`,
              backgroundRepeat: 'no-repeat'
            }}
          />
          <p>{'晴转多云'}</p>
        </div>
        <div className={styles.right}>
          <h1 className={styles.temperature}>{`${22}°`}</h1>
          <p className={styles.description}>{'南京'}</p>
        </div>
      </div>
    </Spin>)
}

Weather.propTypes = {
  city: PropTypes.string,
  icon: PropTypes.string,
  dateTime: PropTypes.string,
  temperature: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
}

export default Weather
