import {React} from 'react'
import Select from 'react-select'
import {Heading4,Heading1, RegisterCont, RegisterForm, FormGroup, InputWrapper, Detailsform, ButtonWrapper, FocusHtml, Detailsformdate, SelectGroup, TextSpan, Checkbox, CheckGroup} from '../styles/register-styles';
const register = () => {
    function inputChange (e) {
        if(e.target.value !== "")
        {
            e.target.classList.add('text');
        }
        else
        {
            e.target.classList.remove('text');
        }
    }
    const options = [
        { value: 'Society-Admin', label: 'Society Admin'},
        { value: 'Society-Member', label: 'Society Member'},
    ]
    const houseoptions = [
        { value: '1BHK', label: '1BHK'},
        { value: '2BHK', label: '2BHK'},
        { value: '3BHK', label: '3BHK'},
        { value: '4BHK', label: '4BHK'},
        { value: 'Other', label: 'More than 4BHK'},

    ]
    return (
        <>
            <RegisterCont>
                <RegisterForm>
                    <Heading1>
                        Hello, Member!
                    </Heading1>
                        <Heading4>Enter your details and start using our amazing services!</Heading4>
                    <form>
                        <InputWrapper>
                        <FormGroup>
                            <Detailsform type = "text" id = "fname" name = "fname" onChange={inputChange} requried tabIndex = "1" />
                            <FocusHtml data-placeholder = "First Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Detailsform type = "text" id = "lname" name = "lname" onChange={inputChange} tabIndex = "2" required/>
                            <FocusHtml data-placeholder = "Last Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Detailsformdate type="date" name="dateofbirth" onChange={inputChange} required />
                            <FocusHtml data-placeholder = "Date Of Birth"/>
                        </FormGroup>
                        <FormGroup>
                            <Detailsform type = "email" name = "email" onChange={inputChange} tabIndex = "2" required/>
                            <FocusHtml data-placeholder = "Email"/>
                        </FormGroup>
                        <FormGroup>
                            <Detailsform type = "text" name = "phonenum" maxLength="10" onChange={inputChange} required/>
                            <FocusHtml data-placeholder = "Phone Number"/>
                        </FormGroup>
                        <FormGroup>
                            <Detailsform type = "text" name = "altphonenum" maxLength="10" onChange={inputChange} />
                            <FocusHtml data-placeholder = "Alternate Phone Number"/>
                        </FormGroup>
                        <SelectGroup>
                            <Select options={options}/>
                            <TextSpan>User Type</TextSpan>
                        </SelectGroup>
                        <CheckGroup>
                            <Checkbox type="radio" id = "ansYes" name="rentState" value="yes"/>
                            <label class="labelCheck" for = "ansYes">Yes</label>
                            <Checkbox type="radio" id = "ansNo" name="rentState" value="no"/>
                            <label class="labelCheck" for = "ansYes">No</label>
                            <TextSpan>Rented Appartment?</TextSpan>
                        </CheckGroup>
                        <FormGroup>
                            <Detailsform type = "text" name = "housename" onChange={inputChange} />
                            <FocusHtml data-placeholder = "House Name"/>
                        </FormGroup>
                        <SelectGroup>
                            <Select options={houseoptions}/>
                            <TextSpan>House Type</TextSpan>
                        </SelectGroup>
                        <SelectGroup>
                            <Detailsform type="file" name="file" onChange={this.onChangeHandler}/>
                        </SelectGroup>
                        </InputWrapper>
                        <ButtonWrapper>
                          <button type = "submit" name = "submit" tabIndex = "4">Login</button>
                        </ButtonWrapper>                 
                    </form>
                </RegisterForm>
            </RegisterCont>
        </>
    )
}
export default register;