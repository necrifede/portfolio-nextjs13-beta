'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Section from '@/components/styled/Section';
import { Toaster, toast } from 'sonner';
import { format } from 'date-fns';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string(),
    message: yup.string().required(),
  })
  .required();

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(await response.json());

      toast.success(`Hi ${data.name}, I will back to you soon.`, {
        description: <span className="text-xs opacity-50">{format(Date.now(), 'PPPPp')}</span>,
      });
    } catch (err) {
      console.error('Error: ', err)
      toast.error(`Something went wrong, try refreshing...`, {
        description: <span className="text-xs opacity-50">{format(Date.now(), 'PPPPp')}</span>,
      });
    }
  };

  return (
    <Section>
      <Toaster expand visibleToasts={3} closeButton />
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base my-5 font-semibold leading-6 text-gray-900">{`Let's get in touch`}</h3>
              <p className="mt-1 text-sm text-gray-600">
                Would you like to know more about me or have questions? I am looking forward to hearing from you and
                will be pleased to help you.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Name Label */}
                    <div className="col-span-6 sm:col-span-5">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name <span className="text-red-700 font-medium ">*</span>
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="Your fullname"
                        className="mt-2 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                        defaultValue=""
                        disabled={isSubmitting}
                        {...register('name')}
                      />
                      <p className="absolute text-xs text-red-700">{errors.name?.message}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-5">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Email <span className="text-red-700 font-medium ">*</span>
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder="Your email, e.g. people@email.com"
                        className="mt-2 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                        defaultValue=""
                        disabled={isSubmitting}
                        {...register('email')}
                      />
                      <p className="absolute text-xs text-red-700">{errors.email?.message}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-5">
                      <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        placeholder="Do you have some topic?"
                        className="mt-2 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                        defaultValue=""
                        disabled={isSubmitting}
                        {...register('subject')}
                      />
                      <p className="absolute text-xs text-red-700">{errors.subject?.message}</p>
                    </div>

                    {/* Message */}
                    <div className="col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        Message <span className="text-red-700 font-medium ">*</span>
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 px-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:py-1.5 sm:text-sm sm:leading-6"
                          placeholder="Your message"
                          defaultValue=""
                          disabled={isSubmitting}
                          {...register('message')}
                        />
                        {errors.message && <p className="absolute text-xs text-red-700">{errors.message?.message}</p>}
                      </div>
                      <p className="m-5 text-sm text-gray-500">
                        Fields with (<span className="text-red-700 font-medium ">*</span>) are mandatory.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="text-white focus:ring-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-5 pr-10 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                  >
                    {isSubmitting && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        // inline mr-3
                        className="absolute h-4 w-4 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
