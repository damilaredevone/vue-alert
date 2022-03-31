import { ComputedRef } from 'vue';

export type AlertButton = {
 title: string;
 onClick: <T = any>() => void | string | T;
 className?: string;
};

export type ButtonType = 'success' | 'danger' | 'warning' | 'error';

export type MessageType = {
 title: string;
 className?: string;
};

export type Alert = {
 message: string | MessageType;
 body?: string;
 icon?: string;
 type?: ButtonType;
 button?: AlertButton;
 onClose?: <T = any>() => void | T;
 buttons?: AlertButton[];
};

export type AlertAPI = {
 set: (alert: Alert) => void;
 remove: (alert: Alert) => void;
 alerts: ComputedRef<Alert[]>;
};
