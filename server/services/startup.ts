import { MongoInternals } from 'meteor/mongo';

import { api } from '../sdk/api';
import { Authorization } from './authorization/service';
import { MeteorService } from './meteor/service';
import { NotificationService } from './listeners/notification';

api.registerService(new Authorization(MongoInternals.defaultRemoteCollectionDriver().mongo.db));
api.registerService(new MeteorService());
api.registerService(new NotificationService());
