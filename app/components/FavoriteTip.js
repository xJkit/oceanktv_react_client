import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Cookies from 'js-cookie';

import HELP from '../assets/images/help.png';

export default class FavoriteTip extends Component {
  constructor(props) {
    super(props)

    this._handleModalClose = ::this._handleModalClose
    this._handleShouldModalNeverTip = ::this._handleShouldModalNeverTip
  }

  render() {
  	const { i18n } = this.props;
  	return(
  		<div className={`Modal-content--tvplayer-not-open-confirm`}>
  		  <h2 className={`Modal-title Modal-title--tvplayer-not-open-confirm`}>
  		    <img className={`Modal-title-icon`} src={HELP} />
  		    <span>
  		    	{i18n[i18n.myLang]['modal.header.remindYoutube']}
  		    </span>
  		  </h2>
  		  <div className={`tvplayer-not-open-confirm-content`}>
  		    <div className={`sentences`}>
  		    	{/*`因為Media Library的歷史包袱，部分歌曲不會加入最愛歌本，如有不滿意請客訴我們。電話 (02)2641-2000`*/}
            {i18n[i18n.myLang]['modal.remindFavorite.descript01']}
  		    </div>
  		  	<label>
  		  		<input className={`nerver-tip-checkbox`} type="checkbox" ref="nerverTipYoutube" />
  		  		{i18n[i18n.myLang]['modal.remindYou.neverTip']}
  		  	</label>
  		  </div>
  		  <form className={`Modal-form`} >
  		    <div className={`Modal-confirm`}>
  		      <button onClick={this._handleModalClose}>
  		        {i18n[i18n.myLang]['modal.remindYou.button.iKnew']}
  		      </button>
  		    </div>
  		  </form>
  		</div>
  	);
  }

  _handleModalClose(evt) {
  	this._handleShouldModalNeverTip();
  	this.props.handleModalClose(evt);
  }

  _handleShouldModalNeverTip() {
  	const { nerverTipYoutube } = this.refs;
  	const shouldNerverTip = findDOMNode(nerverTipYoutube).checked;
  	if (shouldNerverTip) {
	  	Cookies.set('favoriteNeverTip', 0, { expires: 365 }) // 0: 永不提示,  1: 每次提示
	  }
  }
}