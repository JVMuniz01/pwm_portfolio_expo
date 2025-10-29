export const projects = [
{
    id: "1",
    title: "Jogo da Forca",
    description: "Um jogo da forca feito com React Native e Expo",
    route: "/(tabs)/projects/forca" as const,
},
{
    id: "2",
    title: "Portfólio Web",
    description: "Site portfólio pessoal feito com React",
    route: "/(tabs)/projects/web",
},
{
    id: "3",
    title: "App de Tarefas",
    description: "Um app de tarefas usando React Query",
    route: "/(tabs)/projects/tarefas",
},
] as const;