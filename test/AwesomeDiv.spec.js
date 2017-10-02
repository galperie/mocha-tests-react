import buildDom from "./dom-mock";
import jsdom from "mocha-jsdom";
import assert from "assert";
import React from "react";
import {findRenderedDOMComponentWithTag, renderIntoDocument} from "react-addons-test-utils";

import AwesomeDiv from "../components/AwesomeDiv";

describe('(Component) AwesomeDiv', () => {
    buildDom('<html><body></body></html>');
    jsdom({skipWindowCheck: true});

    describe('when rendered', () => {

        it('should contain awesome message', function () {
            const myDiv = renderIntoDocument(<AwesomeDiv/>);

            const divText = findRenderedDOMComponentWithTag(myDiv, 'span');

            assert.equal(divText.textContent, 'I am so so awesome');
        });
    });
});