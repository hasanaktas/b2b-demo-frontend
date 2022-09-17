import * as React from 'react'
import { NextPageExtended } from '@/types'
import { FormikHelpers, useFormik } from 'formik'
import { Button, Form, Container, Spinner } from 'react-bootstrap'
import * as yup from 'yup'
import clsx from 'clsx'
import { useAuthSignInMutation } from '@/hooks'
import { GuestGuard } from '@/components'

type LoginForm = {
    email: string
    password: string
}

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
})

const AdminSignInPage: NextPageExtended = () => {
    const mutation = useAuthSignInMutation()
    const formik = useFormik<LoginForm>({
        validationSchema,
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, helpers) => handleSubmit(values, helpers),
    })

    const handleSubmit = React.useCallback(async (values: LoginForm, helpers: FormikHelpers<LoginForm>) => {
        try {
            await mutation.mutateAsync(values)
        } catch (error) {
            helpers.setSubmitting(false)
        }
    }, [])

    return (
        <Container>
            <Form onSubmit={formik.handleSubmit} noValidate>
                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="email"
                        disabled={formik.isSubmitting}
                        className={clsx({ 'is-invalid': formik.touched.email && Boolean(formik.errors.email) })}
                    />
                    <Form.Text className="text-danger">{formik.touched.email && formik.errors.email}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="current-password"
                        disabled={formik.isSubmitting}
                        className={clsx({ 'is-invalid': formik.touched.password && Boolean(formik.errors.password) })}
                    />
                    <Form.Text className="text-danger">{formik.touched.password && formik.errors.password}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting && (
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                        />
                    )}
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

AdminSignInPage.getLayout = (page) => <GuestGuard>{page}</GuestGuard>

export default AdminSignInPage
