interface IGetIconReturn {
    icon_getter: (name: string) => string
}

export function useGetIcon(): IGetIconReturn {
    
    //TODO: Добавить функционал получения иконки с бэка

    const icon_getter = (name: string) => {
        return "/assets/icons/" + name + ".svg"
    }

    return {icon_getter}
}