
export interface IBase {
    callAPI<T>(
        endPoint: string,
        apiOptions: APIOption,
        requestOptions?: Partial<Cypress.RequestOptions>
    ): Cypress.Chainable<Cypress.Response<T>>;
}

export interface APIOption {
    // options
    isExternal: boolean;
}
