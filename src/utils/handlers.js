import { message } from 'antd';

export const ERRORS_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Oppps! its a error, no problem, we will fix that!',
  NETWORK_ERROR: 'Please verify your internet connection...'
}

export function handleError({ graphQLErrors, networkError }) {
  alert();
  if (graphQLErrors) message.error(ERRORS_MESSAGES[graphQLErrors[0].extensions.code]);
  if (networkError) message.error(ERRORS_MESSAGES.NETWORK_ERROR);
}