/**
 * @file swan env test spec
 * @author sparklewhy@gmail.com
 */

'use strict';

import assert from 'assert';
import * as env from 'core/swan/env';
import api from 'core/swan/api';
import * as naEnv from 'core/na/index';

describe('swan/env', () => {
    it('should export the same API and property as the na env', () => {
        let requiredNaEnvKeys = Object.keys(naEnv);

        let idx = requiredNaEnvKeys.indexOf('setExportInfo');
        if (idx !== -1) {
            requiredNaEnvKeys.splice(idx, 1);
        }

        const envKeys = Object.keys(env);
        assert(requiredNaEnvKeys.length === envKeys.length);
        envKeys.forEach(k => {
            assert(requiredNaEnvKeys.indexOf(k) !== -1);
        });

        assert(env.api === api);
    });
});
