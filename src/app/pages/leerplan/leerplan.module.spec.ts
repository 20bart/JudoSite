import { LeerplanModule } from './leerplan.module';

describe('LeerplanModule', () => {
  let leerplanModule: LeerplanModule;

  beforeEach(() => {
    leerplanModule = new LeerplanModule();
  });

  it('should create an instance', () => {
    expect(leerplanModule).toBeTruthy();
  });
});
