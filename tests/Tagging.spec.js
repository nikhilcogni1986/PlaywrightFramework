import {test, expect} from '@playwright/test';

test('Test1@Sanity', async ({page}) => {
    console.log("SANITY TEST");
});

test('Test2@Reg', async ({page}) => {
    console.log("REGRESSION TEST");
});

test('Test3@Sanity', async ({page}) => {
    console.log("SANITY TEST");
});

test('Test4@Reg', async ({page}) => {
    console.log("REGRESSION TEST")
});

test('Test5@Sanity@Reg', async ({page}) => {
    console.log("SANITY And REGRESSION TEST")
});
