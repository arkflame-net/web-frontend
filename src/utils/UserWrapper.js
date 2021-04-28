export default class User {
    constructor (unwrappedUser) {
        this.permissions = []
        this.roles = unwrappedUser.roles;
        this.unwrappedUser = unwrappedUser;

        for (const role of this.roles) {
            for (const permission of role.permissions) {
                this.permissions.push(permission);
            }
        }
    }

    hasPermission(permissionString) {
        return this.permissions.includes(permissionString);
    }

    hasPermissions(permissionList) {
        for (const permission of permissionList) {
            if (!this.hasPermission(permission)) {
                return false;
            }
        }

        return true;
    }

    hasSomePermission (permissionList) {
        for (const permission of permissionList) {
            if (this.hasPermission(permission)) {
                return true;
            }
        }

        return false;
    }

    isStaff () {
        return this.hasSomePermission(["ADMINISTRATOR", "MODERATOR", "HELPER", "DEVELOPER", "OWNER"])
    }
} 
