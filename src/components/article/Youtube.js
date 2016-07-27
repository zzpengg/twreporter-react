'use strict'
import _ from 'lodash'
import BlockAlignmentWrapper from './BlockAlignmentWrapper'
import React from 'react' // eslint-disable-next-line
import YoutubePlayer from 'react-youtube'
import classNames from 'classnames'
import commonStyles from './Common.scss'
import styles from './Youtube.scss'

class Youtube extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { content } = this.props

    let { description, youtubeId } = _.get(content, [ 0 ], {})

    if (!youtubeId) {
      return null
    }

    return (
      <div className={styles['youtube-container']}>
        <div className={styles['youtube-iframe-container']}>
          <YoutubePlayer videoId={youtubeId} />
        </div>
        <div className={classNames(commonStyles['desc-text-block'], styles['description'], 'text-justify')}>{description}</div>
      </div>
    )
  }
}

Youtube.propTypes = {
  content: React.PropTypes.array.isRequired,
  customStyles: React.PropTypes.array,
  device: React.PropTypes.string
}

Youtube.defaultProps = {
  content: [],
  customStyles: [],
  device: ''
}

export const AlignedYoutube = BlockAlignmentWrapper(Youtube)