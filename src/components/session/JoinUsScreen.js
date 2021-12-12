import React from 'react'

export const JoinUsScreen = () => {
    return (
        <div
             className = "container mt-5"
        >

            <form>

            <div class="row mb-4">
                <div class="col">
                <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label text-warning" for="form3Example1">First name</label>
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label text-warning" for="form3Example2">Last name</label>
                </div>
                </div>
            </div>

            <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label text-warning" for="form3Example3">Email address</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label text-warning" for="form3Example4">Password</label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
                <input
                class="form-check-input me-2 bg-dark"
                type="checkbox"
                id="form2Example33"
                />
                <label class="form-check-label text-light" for="form2Example33">
                Subscribe to our newsletter
                </label>
            </div>

            <button type="submit" class="btn btn-outline-warning btn-block mb-5">Sign up</button>

            <div class="text-center text-light">
                <p>or sign up with:</p>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-danger btn-floating mx-1">
                <i class="fab fa-google"></i>
                </button>

            </div>
            </form>

        </div>
    )
}
