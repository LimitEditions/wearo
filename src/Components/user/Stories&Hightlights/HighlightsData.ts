import { HighlightModel } from "../../../api/data-contracts";

export const HighlightsData: HighlightModel[] = [
    {
        guid: '1',
        createDT: new Date(new Date().getTime() - 3600000).toISOString(),
        updateDT: new Date().toISOString(),
        stories: [
            {
                guid: '1',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "1",
                    createDT: new Date(new Date().getTime() - 3600000).toISOString(), 
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/736x/f4/64/25/f46425039d5a49c5eef1d6d156696d0c.jpg",
                    brandGuid: "brand1"
                },
            },
            {
                guid: '2',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "2",
                    isDeleted: false,
                    createDT: new Date(new Date().getTime() - 2800000).toISOString(), 
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/originals/05/33/0d/05330d8168a1968f78b1387a17537c0d.jpg",
                    brandGuid: "brand1"
                },
            },
            {
                guid: '3',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "3",
                    isDeleted: false,
                    createDT: new Date(new Date().getTime() - 2000000).toISOString(), // 33 минуты назад
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/originals/ce/04/a3/ce04a32d7c8a4499ce270e667e55138e.jpg",
                    brandGuid: "brand1"
                },
            }
        ],
        brandGuid: '001',
        name: 'super-higthlight',
        mainPhotoGuid: 'http://www.clipartbest.com/cliparts/RcG/EdE/RcGEdEG4i.jpg',
    },
    {
        guid: '2',
        createDT: new Date(new Date().getTime() - 3600000).toISOString(),
        updateDT: new Date().toISOString(),
        stories: [
            {
                guid: '1',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "1",
                    createDT: new Date(new Date().getTime() - 3600000).toISOString(), 
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/736x/03/48/43/034843f39e08fb07a24487e81cda785d.jpg",
                    brandGuid: "brand1"
                },
            },
            {
                guid: '2',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "2",
                    isDeleted: false,
                    createDT: new Date(new Date().getTime() - 2800000).toISOString(), 
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/736x/5c/38/3f/5c383fe42671e61990fbac13d12c6116.jpg",
                    brandGuid: "brand1"
                },
            },
            {
                guid: '3',
                createDT: new Date(new Date().getTime() - 3600000).toISOString(),
                updateDT: new Date().toISOString(),
                story: {
                    guid: "3",
                    isDeleted: false,
                    createDT: new Date(new Date().getTime() - 2000000).toISOString(), // 33 минуты назад
                    updateDT: new Date().toISOString(),
                    fileGuid: "https://i.pinimg.com/736x/b1/e3/8b/b1e38b8911a6081a545ad30b8f4459b4.jpg",
                    brandGuid: "brand1"
                },
            }
        ],
        brandGuid: '002',
        name: 'norm-higthlight',
        mainPhotoGuid: 'https://www.freevector.com/uploads/vector/preview/23031/vintage_badge.jpg',
    }
];