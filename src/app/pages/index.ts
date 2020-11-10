export enum Pages {
  LOGIN = 'login',
  DASHBOARD = 'dashboard',
  OUTGOINGS = 'ausgaben'
}

export const PagesConfig = new Map<Pages, string[]>(
  [
    [Pages.LOGIN, []],
    [Pages.DASHBOARD, []],
    [Pages.OUTGOINGS, ['fix-costs', 'variable-costs']]
  ]
);

export * from './login/login.module';
export * from './dashboard/dashboard.module';
export * from './ausgaben/ausgaben.module';
