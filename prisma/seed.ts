import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // await prisma.state.createMany({
    //     data:  [
    //         { id: 1, ds_estado: 'Prenha' },
    //         { id: 2, ds_estado: 'Espera' }
    //     ]
    // });

    await prisma.$transaction([
        prisma.sala.createMany({
            data: [
                { name: 'Sala 1' },
                { name: 'Sala 2' }
            ]
        }),
        prisma.baia.createMany({
            data: [
                { name: 'Baia 1', number: 1, idSala: 1, active: false },
                { name: 'Baia 2', number: 2, idSala: 1, active: false },
                { name: 'Baia 3', number: 3, idSala: 1, active: false },
                { name: 'Baia 4', number: 4, idSala: 1, active: false },
                { name: 'Baia 5', number: 5, idSala: 1, active: false },
                { name: 'Baia 6', number: 6, idSala: 2, active: false },
                { name: 'Baia 7', number: 7, idSala: 2, active: false },
                { name: 'Baia 8', number: 8, idSala: 2, active: false },
                { name: 'Baia 9', number: 9, idSala: 2, active: false },
                { name: 'Baia 10', number: 10, idSala: 2, active: false },
            ]
        })
    ]);

    console.log("registros inseridos")
}

main()
.then(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect
})