/* eslint-disable no-console */
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';

export const newEventSchema = Yup.object().shape({
    title: Yup.string().required('Title cannot be empty'),
});

class FormView extends Component {
    state = {
        userID: 3,
        categories: [],
        currentUser: {},
        otherUsers: [],
        success: false,
    };

    // function for formatting form values to the appropriate data structure:
    //   formatValues = values => {
    //     const time = moment(`${values.time} ${values.ampm}`, 'hh:mm a').format('HH:mm');
    //     const date = moment(values.date).format('YYYY-MM-DD');
    //     // appropriate data structure
    //     const newValues = {
    //       title: values.title,
    //       description: values.description,
    //       category_id: Number(values.category_id) || null, // Formik and Yup return number values as strings (even after successfull validation of type "number")
    //       paid_event: values.paid_event === 'true',
    //       event_fee: Number(values.event_fee) || null,
    //       reward: Number(values.reward) || null,
    //       date: `${date}T${time}`,
    //       duration: values.duration * 360 || null,
    //       coordinator: {
    //         email: values.coordinator_email || null,
    //         id: String(values.coordinator_id), // According to specification in the task description, coordinator id on the output should be a string
    //       },
    //     };
    //     // function for removing properties with null value
    //     const removeNulls = obj =>
    //       Object.entries(obj).forEach(([key, val]) => {
    //         if (val && typeof val === 'object') removeNulls(val);
    //         // eslint-disable-next-line no-param-reassign
    //         else if (val == null) delete obj[key];
    //       });
    //     // remove nulls and return formatted data
    //     removeNulls(newValues);
    //     return newValues;
    //   };

    render() {
        const { userID, categories, currentUser, otherUsers, success } = this.state;

        // show success view on successful submit of a form
        // if (success) return <Redirect to="/success" />;
        // else: render form
        return (
            <Formik
                initialValues={{
                    title: '',
                    title1: '',
                }}
                validationSchema={newEventSchema}
                onSubmit={(values, { resetForm }) => {
                    // const formattedValues = this.formatValues(values);
                    console.log(values);
                    // resetForm({});
                    this.setState({ success: true });
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <Container>
                            <Row>
                                <Col sm="4">
                                    <Field
                                        type="text"
                                        id="title"
                                        name="title"
                                        label="Title"
                                        value={values.title}
                                        placeHolder="Demo text"
                                    />
                                </Col>
                                <Col sm="4">
                                    <Field
                                        type="text"
                                        id="title1"
                                        name="title1"
                                        label="Title1"
                                        value={values.title1}
                                        placeHolder="Demo text1"
                                    />
                                </Col>
                            </Row>

                        </Container>

                        <button type="submit">publish event</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default FormView;

// styled components for form layout:
const StyledForm = styled(Form)`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: start;
  grid-gap: 10px;
  margin: 5px 0;
  min-height: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;
const SmallDescription = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 0;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: 'Open sans', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-style: italic;
  color: ${({ theme, error }) => (error ? theme.error : theme.lightGray)};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Open sans', sans-serif;
  color: ${({ theme }) => theme.darkGray};
  line-height: 1.7;
  padding: 0 10px;
`;

const RadioGroup = styled.div`
  display: inline-flex;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
`;