import { InjectionKey, ref, computed, readonly, inject } from 'vue';
import type { Ref } from 'vue';

import type { Alert, AlertAPI } from './types';

export const AlertKey: InjectionKey<AlertAPI> = Symbol('AlertAPI');

const alerts: Ref<Alert[]> = ref([]);

export const getAlerts = computed(() => readonly(alerts.value));

export const setAlerts = (alert: Alert): void => {
 if (alerts.value.find((el) => el.message === alert.message)) return;
 alerts.value.push({ ...alert });
};

export const removeAlert = (alert: Alert): void => {
 const alertIndex = alerts.value.findIndex(
  (el) => el.message === alert.message,
 );
 if (alertIndex === -1) return;
 alerts.value.splice(alertIndex, 1);
};

export const useAlert = (): AlertAPI => inject(AlertKey) as AlertAPI;
