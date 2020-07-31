import { UserService } from '../_services/index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserProfileKeysView } from '../_models/userprofile';
import { RouterModule } from '@angular/router';

fdescribe('UserService', () => {
    let httpTestingController: HttpTestingController;
    let userService: UserService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                RouterModule.forRoot([])
            ],
            providers: [UserService]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
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
             expires_in: 86399
         }
         localStorage.setItem('currentUser', JSON.stringify(user));
         
         userService.getAPIKeys(1).subscribe((response:UserProfileKeysView) => {
            profileResponse = response;
            expect(profileResponse).toEqual(mockProfile);
         });

         const req = httpTestingController.expectOne('http://localhost:51721/getuserprofilekeys?storeID=1');
         req.flush(mockProfile);

    })
})