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
