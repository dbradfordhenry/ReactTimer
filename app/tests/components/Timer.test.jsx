var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');
describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('timer count up', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.countdownStatus).toBe('started');

    setTimeout(() => {
      expect(countdown.state.count).toBe(2);
      done();
    }, 2001);
  });
});
