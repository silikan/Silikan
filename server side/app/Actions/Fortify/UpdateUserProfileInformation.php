<?php

namespace App\Actions\Fortify;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return void
     */
    public function update($user, array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
            'username' => ['required',  'string', 'max:255', Rule::unique('users')->ignore($user->id)],

        ])->validateWithBag('updateProfileInformation');

        if (
            $input['email'] !== $user->email &&
            $user instanceof MustVerifyEmail
        ) {
            $this->updateVerifiedUser($user, $input);
        } else {
            $user->forceFill([
                'name' => $input['name'],
                'email' => $input['email'],
                'is_online' => $input['is_online'],
                'is_available_to_hire' => $input['is_available_to_hire'],
                'is_handyman' => $input['is_handyman'],

                'is_admin' => $input['is_admin'],
                'is_moderator' => $input['is_moderator'],
                'username' => $input['username'],
                'bio' => $input['bio'],
                'date_of_birth' => $input['date_of_birth'],
                'phone_number' => $input['phone_number'],
                'address' => $input['address'],
                'country' => $input['country'],
                'city' => $input['city'],
                'state' => $input['state'],
                'zip_code' => $input['zip_code'],
                'website' => $input['website'],
                'gender' => $input['gender'],




                'work_time_length' => $input['work_time_length'],
                'work_hours' => $input['work_hours'],
                'work_place' => $input['work_place'],
                'salary' => $input['salary'],
                'facebook_social_link' => $input['facebook_social_link'],
                'linkedin_social_link' => $input['linkedin_social_link'],
                'twitter_social_link' => $input['twitter_social_link'],
                'education' => $input['education'],
                'certifications' => $input['certifications'],
                'experience' => $input['experience'],
                'skills' => $input['skills']
            ])->save();
        }
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return void
     */
    protected function updateVerifiedUser($user, array $input)
    {
        $user->forceFill([
            'name' => $input['name'],
            'email' => $input['email'],
            'is_online' => $input['is_online'],
            'is_available_to_hire' => $input['is_available_to_hire'],
            'is_handyman' => $input['is_handyman'],

            'is_admin' => $input['is_admin'],
            'is_moderator' => $input['is_moderator'],
            'username' => $input['username'],
            'bio' => $input['bio'],
            'date_of_birth' => $input['date_of_birth'],
            'phone_number' => $input['phone_number'],
            'address' => $input['address'],
            'country' => $input['country'],
            'city' => $input['city'],
            'state' => $input['state'],
            'zip_code' => $input['zip_code'],
            'website' => $input['website'],
            'gender' => $input['gender'],


            'facebook_social_link' => $input['facebook_social_link'],
            'linkedin_social_link' => $input['linkedin_social_link'],
            'twitter_social_link' => $input['twitter_social_link'],

            'education' => $input['education'],
            'certifications' => $input['certifications'],
            'experience' => $input['experience'],
            'skills' => $input['skills'],

            'work_time_length' => $input['work_time_length'],
            'work_hours' => $input['work_hours'],
            'work_place' => $input['work_place'],
            'salary' => $input['salary'],
            'email_verified_at' => null,
        ])->save();

        $user->sendEmailVerificationNotification();
    }
}
