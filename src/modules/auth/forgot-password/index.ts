import './send-code';
import './verification-code';
import './change-password';
import store from '@/stores';
import forgotPassword from './store';
store.registerModule('forgotPassword', forgotPassword, { preserveState: false });
