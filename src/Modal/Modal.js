import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.styl';
import ReactModal from 'react-modal';

const cx = classNames.bind(styles);

class Modal extends Component {
  static propTypes = {
    isOpen: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    onSuccess: React.PropTypes.func,
    successButton: React.PropTypes.bool,
    successButtonText: React.PropTypes.string,
    onFail: React.PropTypes.func,
    failButton: React.PropTypes.bool,
    failButtonText: React.PropTypes.string,
    footerChild: React.PropTypes.node,
    size: React.PropTypes.oneOf(['large', 'small'])
  };

  static defaultProps = {
    isOpen: false,
    title: 'Modal title',
    onSuccess: () => {},
    successButton: true,
    successButtonText: 'Save',
    onFail: () => {},
    failButton: true,
    failButtonText: 'Cancel',
    footerChild: null
  };

  constructor(props) {
    super(props);

    this.removeDefaultStyles = {
      overlay: {
        position: null,
        top: null,
        left: null,
        right: null,
        bottom: null,
        backgroundColor: null
      },
      content: {
        position: null,
        top: null,
        left: null,
        right: null,
        bottom: null,
        border: null,
        background: null,
        overflow: null,
        WebkitOverflowScrolling: null,
        borderRadius: null,
        outline: null,
        padding: null
      }
    };

    this.handleSuccessModal = ::this.handleSuccessModal;
    this.handleFailModal = ::this.handleFailModal;
  }

  componentWillUnmount() {
    document.body.classList.remove('ReactModal__Body--open');
  }

  handleSuccessModal() {
    this.props.onSuccess();
  }

  handleFailModal() {
    this.props.onFail();
  }

  getExample(){
    return (`<Modal isOpen={false}>
  <p>Hello, world</p>
</Modal>`);
  }

  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} style={this.removeDefaultStyles}>
        <div className={cx('modal', 'modal--in')} >
          <div className={cx('modal__backdrop')} onClick={this.handleFailModal} />
          <div
            className={cx('modal__dialog', {
              'modal__dialog--sm': this.props.size === 'small',
              'modal__dialog--lg': this.props.size === 'large'
            })}
          >
            <div className={cx('modal__content')}>
              <div className={cx('modal__header')}>
                <button
                  type="button"
                  className={cx('modal__close')}
                  onClick={this.handleFailModal}
                >
                  <span className={cx('modal__x')}>&times;</span>
                  <span className="sr-only">Close</span>
                </button>
                <h4 className={cx('modal__title')}>{this.props.title}</h4>
              </div>
              <div className={cx('modal__body')}>
                {this.props.children}
              </div>
              <div className={cx('modal__footer')}>
                {this.props.failButton ?
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={this.handleFailModal}
                  >{this.props.failButtonText}</button> :
                  null
                }
                {this.props.successButton ?
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSuccessModal}
                  >{this.props.successButtonText}</button> :
                  null
                }
                {this.props.footerChild}
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
