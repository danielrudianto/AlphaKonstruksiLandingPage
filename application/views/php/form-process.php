el-indicator-active-bg;
    background-clip: padding-box;
    // Use transparent borders to increase the hit area by 10px on top and bottom.
    border-top: $carousel-indicator-hit-area-height solid transparent;
    border-bottom: $carousel-indicator-hit-area-height solid transparent;
    opacity: .5;
    @include transition($carousel-indicator-transition);
  }

  .active {
    opacity: 1;
  }
}


// Optional captions
//
//

.carousel-caption {
  position: absolute;
  right: (100% - $carousel-caption-width) / 2;
  bottom: 20px;
  left: (100% - $carousel-caption-width) / 2;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: $carousel-caption-color;
  text-align: center;
}
                                                                                                                                                                                                                                                                                                                                      ----------------------------
|  Auto-load Packages
| -------------------------------------------------------------------
| Prototype:
|
|  $autoload['packages'] = array(APPPATH.'third_party', '/usr/local/shared');
|
*/
$autoload['packages'] = array();

/*
| ----------------------------------------------------------------