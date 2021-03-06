var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var coundownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(coundownForm));

    coundownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);

  });
  it('should call not onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var coundownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(coundownForm));

    coundownForm.refs.seconds.value = 'fhasdf';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
