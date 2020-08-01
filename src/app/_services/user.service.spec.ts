import { UserService, TokenService } from '../_services/index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserProfileKeysView } from '../_models/userprofile';
import { RouterModule } from '@angular/router';

fdescribe('UserService', () => {
    let httpTestingController: HttpTestingController;
    let userService: UserService;
    let tokenService: TokenService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                RouterModule.forRoot([])
            ],
            providers: [UserService]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
        tokenService = TestBed.get(TokenService);

        interface LocalStore {
            currentUser: string;
        }
        let localStore: LocalStore = { currentUser: "" };

        const mockLocalStorage = {
            getItem: (key: string): string | null => {
                if (key in localStore) {
                    return localStore['currentUser'];
                }
                else {
                    return null;
                }
                // return key in store ? store['currentUser'] : null;
            },
            setItem: (key: string, value: string) => {
                localStore['currentUser'] = `${value}`;
            }
        };
        spyOn(localStorage, 'getItem')
            .and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem')
            .and.callFake(mockLocalStorage.setItem);
    })
    afterEach(() => {
        httpTestingController.verify();
    })

    it('should test', () => {
        const mockProfile: UserProfileKeysView = {
            id: 1,
            userID: "",
            storeID: 1,
            appID: "",
            certID: "",
            devID: "",
            APIEmail: "",
            token: ""
        }
        let profileResponse: UserProfileKeysView;
        let user = {
            access_token: "86399"
        }
        // localStorage.setItem('currentUser', JSON.stringify(user));
        tokenService.setAccessToken(JSON.stringify(user));
        userService.getAPIKeys(1).subscribe((response: UserProfileKeysView) => {
            profileResponse = response;
            expect(profileResponse).toEqual(mockProfile);
        });

        const req = httpTestingController.expectOne('http://localhost:51721/getuserprofilekeys?storeID=1');
        req.flush(mockProfile);

    })
})