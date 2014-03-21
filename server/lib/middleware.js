/* Crypton Server, Copyright 2013 SpiderOak, Inc.
 *
 * This file is part of Crypton Server.
 *
 * Crypton Server is free software: you can redistribute it and/or modify it
 * under the terms of the Affero GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * Crypton Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the Affero GNU General Public
 * License for more details.
 *
 * You should have received a copy of the Affero GNU General Public License
 * along with Crypton Server.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var app = process.app;

var middleware = module.exports = {};

/**!
 * ### verifySession(req, res, next)
 * Determine if the `session-identifier` header exists in the session store
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
middleware.verifySession = function (req, res, next) {
  var session = req.session;

  if (!session || !session.accountId) {
    app.log('debug', 'session ' + req.sessionId + ' invalid');

    return res.send({
      success: false,
      error: 'Invalid session'
    });
  }

  next();
};
