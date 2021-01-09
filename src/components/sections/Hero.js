import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { ga } from 'react-ga';

const images = [
  {
    original: 'https://i.ibb.co/Cz7PRzT/IMG-3396.jpg',
    thumbnail: 'https://i.ibb.co/Cz7PRzT/IMG-3396.jpg',
  },
  {
    original: 'https://i.ibb.co/tCBrfvY/IMG-3395.jpg',
    thumbnail: 'https://i.ibb.co/tCBrfvY/IMG-3395.jpg',
  },
  {
    original: 'https://i.ibb.co/PzhFV32/IMG-3398.jpg',
    thumbnail: 'https://i.ibb.co/PzhFV32/IMG-3398.jpg',
  },
  {
    original: 'https://i.ibb.co/tMPK3Jt/IMG-3485.jpg',
    thumbnail: 'https://i.ibb.co/tMPK3Jt/IMG-3485.jpg',
  },
  {
    original: 'https://i.ibb.co/Mng533C/IMG-3394.jpg',
    thumbnail: 'https://i.ibb.co/Mng533C/IMG-3394.jpg',
  },
];

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const galleryRef = React.createRef();

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  setInterval(() => {
    if (galleryRef.current) {
      const index = galleryRef.current.getCurrentIndex()
      galleryRef.current.slideToIndex(index + 1)
    }
  }, 2000);

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Star Magnets</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Your experience with star Magnets will begin with a brief consultation to discuss the frame style and text you would like to include such as name, date, event name or anything else you would like to appear. Then during the event, rather than a traditional, stationary stand-in-line photo shoot, star Magnets provides a world-class photographer to discretely mingle among guests and capture you, family and friends enjoying your time together
                </p>
            </div>
          </div>
          <ImageGallery ref={galleryRef} items={images} />
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;