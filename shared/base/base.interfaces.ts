
export interface IBaseAPI {
    callAPI<T>(
        endPoint: string,
        requestOptions?: Partial<Cypress.RequestOptions>
    ): Cypress.Chainable<Cypress.Response<T>>;
}
